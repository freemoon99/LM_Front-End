import React, { useState, useRef } from 'react';
import '../../styles/components/forms/SignUpForm.css'

function SignUpForm() {
    // const [btn, setBtn] = useState(true);

    // function changeBtn(){
    //     inputId.includes('@') && inputPw.length >= 5 ? setBtn(false) :setBtn(true);
    // }

    function handleAuthCode(e) { setAuthCode(e.target.value)};
    function handlePwCheck(e) { setUserPwCheck(e.target.value)};
    //이메일 유효성 검사
    function emailCheck()
    {
        const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if( regExp.test(userData.userEmail) === false )
        {
            alert('이메일 오류');
            setUserData({
                ...userData,
                ['userEmail']: '',
            });
            userEmailRef.current.focus();
            return;
        }
    }

    const handleChangeData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    function signUpHandler()
    {
        if(userData.userName.length < 2)
        {  
            alert('이름을 입력해주세요');
            setUserData({
                ...userData,
                ['userName']: '',
            });
            console.log(userData);
            userNameRef.current.focus();
            return;
        }

        if(authCode.length !==8 || authEmail === false)
        {
            alert('인증코드 혹은 인증을 확인해주세요')
            setAuthCode('');
            authCodeRef.current.focus();
            return;
        }

        if(userData.userPw.length <5)
        {  
            alert('비밀번호는 5자리 이상입니다')
            setUserData({
                ...userData,
                ['userPw']: '',
            });
            userPwRef.current.focus();
            return;
        }

        if(userData.userPw !== userPwCheck)
        {  
            alert('비밀번호가 다릅니다')
            setUserPwCheck('');
            userPwCheckRef.current.focus();
            return;
        }
    }

    const authCodeRef = useRef();
    const userPwCheckRef = useRef();
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const userPwRef = useRef();

    // 이메일 구조 정의
    const structure = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
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
                <button className='send' onClick={emailCheck}>전송</button>
            </div>
            
            <div className='pwConfirm'>
                <input type='text' id='certification' placeholder='인증코드' value={authCode} ref={authCodeRef} onChange={handleAuthCode}/>
                <button className='confirm'>확인</button>
            </div>
            
            <input type='password' id='password' placeholder='비밀번호' value={userData.userPw} name="userPw" ref={userPwRef} onChange={handleChangeData}/>
            
            <input type='password' id='pwCheck' placeholder='비밀번호 확인' value={userPwCheck} ref={userPwCheckRef} onChange={handlePwCheck}/>

            <button className='signbtn' onClick={signUpHandler}>회원가입</button>
        </div>
    );
}

export default SignUpForm;