import {useRef, useState} from 'react';
import '../../styles/components/forms/CreateForm.css';


const CreateForm = () => {
    const textInputRef = useRef();
    const emailInputRef = useRef();

    const [recievEmail, setRecievEmail] = useState('');
    const [post, setPost] = useState({
        content: '',
        recievers: [],
        cycle: 3,
        count: 2
    });

    function editText(e){
        setPost({...post, content: e.target.value});
    }
    function editEmail(e){
        setRecievEmail(e.target.value);
    }
    function checkRegular(){
        if(!recievEmail){
            emailInputRef.current.focus();
            return;
        }

        const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(regEmail.test(recievEmail)){
            addEmail();
        }
        else{
            alert('이메일 형식을 다시 확인해주세요.')
        }
    }
    function addEmail(){
        if(post.recievers.includes(recievEmail)){
            alert('이미 추가한 이메일입니다.');
            setRecievEmail('');
            return;
        }
        post.recievers.push(recievEmail);
        setRecievEmail('');
    }
    function showEmail(){
        const email_list = [];
        for(let i = post.recievers.length-1; i > -1 ; i--){
            email_list.push(
                <div key={i} className='CreateForm_RecieversList_Box'>
                    <div className='CreateForm_RecieversList_Email'>
                        {post.recievers[i]}
                    </div>
                    <img src='images/close_button.png' 
                        alt='X'
                        className='CreateForm_RecieversList_X'
                        onClick={()=>{removeEmail(i);}}/>
                </div>
            );
        }
        return email_list;
    }
    function removeEmail(index){
        const updateReciever = post.recievers.filter(function(data){
            return data !== post.recievers[index];
        })
        
        setPost({...post, recievers: updateReciever});
    }
    function handleCycle(e){
        setPost({...post, cycle: e.target.value});
    }
    function handleCount(e){
        setPost({...post, count: e.target.value});
    }
    function checkPost(){
        if(post.content === ''){
            textInputRef.current.focus();
            return;
        }
        if(post.recievers.length === 0){
            emailInputRef.current.focus();
            return;
        }

        sendPost();
    }
    function sendPost(){
        // 통신
        return;
    }

    return(
        <div className="CreateForm">
            <div className='CreateForm_InputBox'>
                <div className='CreateForm_ContentBox'> 
                    <div className='CreateForm_SubTitle'>
                        내용
                    </div>
                    <textarea ref={textInputRef}
                            value={post.content} 
                            onChange={editText} 
                            className='CreateForm_Content_Input'/>
                </div>
                <div className='CreateForm_RecieversBox'>
                    <div className='CreateForm_SubTitle'>
                        수신 이메일
                    </div>
                    <div className='CreateForm_EmailInputBox'>
                        <input  ref={emailInputRef}
                                value={recievEmail}
                                onChange={editEmail} 
                                className='CreateForm_EamilInput'/>
                        <div onClick={()=>{checkRegular();}} 
                            className='CreateFrom_EamilAdd'>
                            추가
                        </div>
                    </div>
                    {post.recievers.length>0 
                    &&
                    <div className='CreateForm_RecieversList'>
                        {showEmail()}
                    </div>}
                </div>
                <div className='CreateForm_LifeCheckBox'>
                    <div className='CreateForm_SubTitle'>
                        회신 코드 설정
                    </div>
                    <div className='CreateForm_SelectBox'>
                        <div className='CreateForm_SelectBox_Title'>
                            전송 주기
                        </div>
                        <select defaultValue={post.cycle} 
                                className='CreateForm_SelectBox_Select'
                                onChange={handleCycle}>
                            <option value={1}>
                                1개월
                            </option>
                            <option value={3}>
                                3개월
                            </option>
                            <option value={6}>
                                6개월
                            </option>
                            <option value={12}>
                                1년
                            </option>
                        </select>
                    </div>
                    <div className='CreateForm_SelectBox'>
                        <div className='CreateForm_SelectBox_Title'>
                            코드 전송 횟수
                        </div>
                        <select defaultValue={post.count} 
                                className='CreateForm_SelectBox_Select'
                                onChange={handleCount}>
                            <option value={1}>
                                1회
                            </option>
                            <option value={2}>
                                2회
                            </option>
                            <option value={3}>
                                3회
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='CreateForm_PostBox'>
                <div className='CreateForm_PostBox_PostButton'
                    onClick={checkPost}>
                    남기기.
                </div>
            </div>
        </div>
    );
}

export default CreateForm;