import React from 'react';
import '../styles/pages/LoginPage.css'
import LoginForm from './../components/forms/LoginForm';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();
    
    const signHandler = () => {
        navigate('/signup');
    }
    
    return (
        <div className='Box'>
            <img id='banner' src='/images/LM_flower_45.png' alt='사진이 없습니다'/>
            <p id='maintitle'>남김.</p>
            <p id='subtitle'>금잔화:이별의 슬픔</p>
            <LoginForm />
            
            <div className="signBtn-Box">
                <div className='signBtn-Box-signupbtn' onClick={signHandler}>회원가입</div>
            </div>
        </div>
    );
}

export default LoginPage;