import React, { useState, useRef } from 'react';
import '../../styles/components/forms/SignUpForm.css'

function SignUpForm() {

    function handleAuthCode(e) { setAuthCode(e.target.value)};
    function handlePwCheck(e) { setUserPwCheck(e.target.value)};

    const handleChangeData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name);
    }

    const authCodeRef = useRef();
    const userPwCheckRef = useRef();
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const userPwRef = useRef();

    // 인증 코드 상태 저장
    const [ authCode, setAuthCode ] = useState('');
    // 비밀번호 확인 값 상태 저장
    const [ userPwCheck, setUserPwCheck ] = useState('');
    // 이메일 인증 여부 상태 저장
    const [ authEmail, setAuthEmail ] = useState(false);
    // 서버에 보낼 데이터 상태 저장
    const [ userData, setUserData ] = useState({
        userName : "",
        userEmail : "",
        userPw : "",
    });

    return (
        <div className='signBox'>
            
            <input type='text' id='name' placeholder='이름' value={userData.userName} name="userName" ref={userNameRef} onChange={handleChangeData}/>
            
            <div className='sendEmail'>
                <input type='text' id='email' placeholder='이메일' value={userData.userEmail} name="userEmail" ref={userEmailRef} onChange={handleChangeData}/>
                <button className='send'>전송</button>
            </div>
            
            <div className='pwConfirm'>
                <input type='text' id='certification' placeholder='인증코드' value={authCode} ref={authCodeRef} onChange={handleAuthCode}/>
                <button className='confirm'>확인</button>
            </div>
            
            <input type='password' id='password' placeholder='비밀번호' value={userData.userPw} name="userPw" ref={userPwRef} onChange={handleChangeData}/>
            
            <input type='text' id='pwCheck' placeholder='비밀번호 확인' value={userPwCheck} ref={userPwCheckRef} onChange={handlePwCheck}/>

            <button className='signbtn'>회원가입</button>
        </div>
    );
}

export default SignUpForm;