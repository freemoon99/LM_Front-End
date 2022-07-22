import "../styles/components/Out.css";
import axios from "axios";
import proxy from "../security/Security.json"

function logoutHandler()
{
    if(window.confirm('로그아웃 하시겠습니까?')){
        axios.post(`${proxy['proxy']}/user/logout/`, {
        },{
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        .then(function(response){
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            window.location.replace('/login');
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

function byeHandler()
{
    if(window.confirm('회원탈퇴 하시겠습니까?\n작성한 이야기가 사라집니다.')){
        axios.post(`${proxy['proxy']}/user/signout/`, {
            token: localStorage.getItem("token")
        },{
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        .then(function(response){
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            window.location.replace('/login');
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

const Out = () => {
    return(
        <div className="Out">
            <div className="Out-logout-btn" onClick={logoutHandler}>로그아웃</div>
            <div className="Out-withdrawal-btn" onClick={byeHandler}>회원탈퇴</div>
        </div>
    );
}

export default Out;