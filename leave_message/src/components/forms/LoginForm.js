import React, { useState } from 'react';
import '../../styles/components/forms/LoginForm.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function LoginForm() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [button, setButton] = useState(true);

    const goMain = () => {
        Navigate('/');
    }

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }
    
    // 비밀번호 5자리 이상일 때, 아이디에 @ 포함되어 있을 때
    function changeButton(){
        inputId.includes('@') && inputPw.length >= 5 ? setButton(false) :setButton(true);
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        axios({
            method:'post',
            url:"url",
            data:{
                email: inputId,
				password: inputPw,
            },
            headers:{
                'ContentType':'application/json'
            }
        })
        .then((res)=>{
            if(res.data.token){
                goMain();
            }
        })
        .catch(()=>{
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        })
    }

    return (
        <div className='loginBox'>
            <input type='text' className="login-form-input" placeholder='이메일' value={inputId} onChange={handleInputId} onKeyUp={changeButton}/>
            <input type='password' className="login-form-input" placeholder='비밀번호' value={inputPw} onChange={handleInputPw} onKeyUp={changeButton}/>
            <button type='button' className="login-form-btn" disabled={button} onClick={onClickLogin}>로그인</button>
        </div>
    );
}

export default LoginForm;