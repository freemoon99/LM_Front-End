import React from 'react';
import '../styles/pages/SignUpPage.css'
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/forms/SignUpForm';



function SignUpPage() {

    const navigate = useNavigate();
    const loginHandler = () => {
        navigate('/login');
    }

    return (
        <div className='fullBox'>
            <div className='head'>
                <div id='bbox'>
                    <div className='titleText'>남김.</div>
                    <div className='underText'>못다한 이야기를 남겨보세요.</div>
                </div>
                
            </div>
            <div className='middle'>
                <SignUpForm />
            </div>
            <div className='bottom'>
                <div className='loginBtn' onClick={loginHandler}>로그인</div>
            </div>
        </div>
    );
}

export default SignUpPage;