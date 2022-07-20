import React, { useEffect, useState } from 'react';
import '../../styles/components/forms/SignUpForm.css'
import axios from 'axios';

function SignUpForm() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
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
        <div className='signBox'>
            <input type='text' id='name' placeholder='이름' />
            <div className='sendEmail'>
                <input type='text' id='email' placeholder='이메일' value={inputId} onChange={handleInputId} />
                <button className='send'>전송</button>
            </div>
            <div className='pwConfirm'>
                <input type='text' id='certification' placeholder='인증코드' />
                <button className='confirm'>확인</button>
            </div>
            <input type='password' id='password' placeholder='비밀번호' value={inputPw} onChange={handleInputPw} />
            <input type='text' id='pwCheck' placeholder='비밀번호 확인' />
            <button className='signbtn'>회원가입</button>
        </div>
    );
}

export default SignUpForm;