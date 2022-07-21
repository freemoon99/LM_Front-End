import { React, useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import '../../styles/components/forms/LoginForm.css'
import axios from 'axios';

function LoginForm() {

    const idInput = useRef();
    const pwInput = useRef();

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
    function onClickLogin()
    {
        // 이메일 형식이 @가 없거나, @개 2개 이상일 경우 
        if(inputId.split('@').length - 1 > 1 || inputId.split('@').length - 1 === 0)
        {
            alert('이메일 형식이 잘못되었습니다!');
            idInput.current.focus();
            setInputId('');
            setInputPw('');
            return;
        }

        // 비밀번호가 없거나, 12자리 초과할 경우
        if(inputPw.length === 0 || inputPw.length > 12)
        {
            alert('비밀번호가 입력되지않았습니다!');
            pwInput.current.focus();
            setInputId('');
            setInputPw('');
            return;    
        }

        axios({
            method: 'post',
            url: '127.0.0.1:8000/user/login/',
            data: {
                email: idInput,
                password: pwInput,
            },
            headers: {
                'ContentType':'applicaiont/json'
            },
        }).then((res)=>{console.log(res.data)}).catch();
        goMain();
    }
        
    return (
        <div className='loginBox'>
            <input type='text' className="login-form-input" placeholder='이메일' ref={idInput} value={inputId} onChange={handleInputId} onKeyUp={changeButton}/>
            <input type='password' className="login-form-input" placeholder='비밀번호 ( 5자리 이상 )' ref={pwInput} value={inputPw} onChange={handleInputPw} onKeyUp={changeButton}/>
            <button type='button' className="login-form-btn" disabled={button} onClick={onClickLogin}>로그인</button>
        </div>
    );
}

export default LoginForm;