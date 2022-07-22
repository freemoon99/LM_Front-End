import { useState } from "react";
import "../styles/components/MenuList.css";
import SurveyModal from "./modals/SurveyModal";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import proxy from '../security/Security.json';

const MenuList = () => {

    const [menuList] = useState([
        ['작성하기.', '못다한 이야기를 남겨보세요.'],
        ['수정하기.', '이야기를 수정해 보세요.'],
        ['삭제하기.', '이야기를 지우시겠어요?'],
        ['코드 입력하기.', '이메일 회신 코드를 입력해주세요.']
    ]);
    const [showModal, setShowModal] = useState(false);
    const [moveState, setMoveState] = useState(-1);

    function clickMenu(index){
        switch(index){
            case 0:
                createPost(index)
                break
            case 1:
                updatePost(index);
                break
            case 2:
                deletePost();
                break
            case 3:
                checkLife();
                break
            default:
                console.log('error');
        }
    }
    function checkCreate(){
        // 토큰이 존재한다면 ?
        if(localStorage.getItem('token')){
            axios.post(`${proxy['proxy']}/post/new/`,
            { token: localStorage.getItem('token') },
            { 
                headers: {
                    'Authorization':`Token ${localStorage.getItem('token')}`
                }
            })
            .then((res)=>{
                if(res.status === 200)
                {
                    checkDepression();
                }})
            .catch((err)=>{
                if(err.staus !== 200)
                {
                    alert('이미 작성되었거나 오류입니다');
                }
            })
        } 
        // 토근이 존재하지않는다면 ?
        else{
            alert('로그인 화면으로 이동합니다.');
            navigate('/login');
            return;
        }
    }

    function checkUpdate(){
        // 토큰이 존재한다면 ?
        if(localStorage.getItem('token')){
            axios.post(`${proxy['proxy']}/post/new/`,
            { token: localStorage.getItem('token') },
            { 
                headers: {
                    'Authorization':`Token ${localStorage.getItem('token')}`
                }
            })
            .then((res)=>{
                if(res.status === 200)
                {
                    alert('작성된 유서가 없습니다.');
                }})
            .catch((err)=>{
                if(err.staus !== 200)
                {
                    checkDepression();
                }
            })
        }
    // 토근이 존재하지않는다면 ?
    else{
        alert('로그인 화면으로 이동합니다.');
        navigate('/login');
        return;
    }
}

    function checkToken(){
        // 토큰이 존재한다면 ?
        if(localStorage.getItem('token')){
            axios.post(`${proxy['proxy']}/post/new/`, 
            { token : localStorage.getItem('token') },
            { 
                headers : { 
                    'Authorization' :`Token ${localStorage.getItem('token')}`
                }
            })
            .then((res)=>{console.log(res)})
            .catch(function(error){
                
                console.log(error);
            });
            
        } 
        // 토근이 존재하지않는다면 ?
        else{
            alert('로그인 화면으로 이동합니다.');
            navigate('/login');
            return;
        }
    }

    function createPost(index){
        // 토큰이 있으면
        checkToken();
        setMoveState(index);
        checkCreate();
    }
    function updatePost(index){
        // 작성된 유서가 있으면
        setMoveState(index);
        checkUpdate();
    }
    function deletePost(){
        // 작성된 유서가 있으면
        if (window.confirm("당신의 이야기가 사라집니다.\n정말 삭제하시겠습니까?")){
            //삭제
        }
    }

    function InputHandler()
    {
        const lifecode = window.prompt('이메일에 수신된 코드를 입력해주세요.');
        if(lifecode)
        {
            axios.post(`${proxy['proxy']}/lifecode/`, 
            { 
                token : localStorage.getItem('token'),
                lifecode : lifecode,
            },
            { 
                headers : { 
                    'Authorization' :`Token ${localStorage.getItem('token')}`
                }
            })
            .then((res)=>{ if(res.status === 200) { alert('인증되었습니다.'); }})
            .catch(()=>{alert('코드가 일치하지않습니다.')})
        }
    }

    function checkLife(){
        // 인증코드를 발송했으면
        axios.post(`${proxy['proxy']}/lifecodecheck/`, 
            { token : localStorage.getItem('token') },
            { 
                headers : { 
                    'Authorization' :`Token ${localStorage.getItem('token')}`
                }
            })
            .then((res)=>{ if(res.status === 200) { InputHandler }})
            .catch(()=>{alert('발송된 코드가 없습니다.')})
    }

    function checkDepression(index){
        setShowModal(true);
    }

    function showMenu(){
        const list = []
        for(let i = 0; i < 4; i++){
            list.push(
                <div key={i} className='MenuBox'>
                    <div className="MenuBox_Title" onClick={()=>{clickMenu(i)}}>
                        {menuList[i][0]}
                    </div>
                    <div className="MenuBox_Text">
                        {menuList[i][1]}
                    </div>
                </div>
            );
        }
        return list;
    }

    const navigate = useNavigate();

    return(
        <div className="MenuList">
            <div className="MenuList_Box">
                {showMenu()}
            </div>

            <SurveyModal
                show = {showModal}
                onHide = {()=> setShowModal(false)}
                state = {moveState}
            />
        </div>
    );
}

export default MenuList;