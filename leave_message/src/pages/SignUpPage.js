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
                <p className='titleText'>남김.</p>
                <p className='underText'>못다한 이야기를 남겨보세요.</p>
            </div>

            <SignUpForm />
            
            <div className='bottom'>
                <button type='button' className='loginBtn' onClick={loginHandler}>로그인</button>
            </div>
        </div>
    );
}

export default SignUpPage;