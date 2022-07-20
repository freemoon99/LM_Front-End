import React, { useEffect, useState } from 'react';
import '../../styles/components/forms/LoginForm.css'
import axios from 'axios';

function LoginForm() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('주소')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return (
        <div>
            <div className='loginBox'>
                <input type='text' id='inputId' placeholder='이메일' value={inputId} onChange={handleInputId} />
                <input type='password' id='inputPw' placeholder='비밀번호' value={inputPw} onChange={handleInputPw} />
                <button type='button' className='btn' onClick={onClickLogin}>로그인</button>
            </div>
        </div>
    );
}

export default LoginForm;