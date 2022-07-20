import React from 'react';
import '../styles/pages/SignUpPage.css'
import { Link } from 'react-router-dom';
import SignUpForm from '../components/forms/SignUpForm';



function SignUpPage() {
    return (
        <>
            <div className='head'>
                <div className='titleBox'>
                    <p className='title'>남김.</p>
                    <p className='underText'>못다한 이야기를 남겨보세요.</p>
                </div>
            </div>
            <SignUpForm />
            <div className='bottom'>
                <button type='button' className='loginBtn'><Link to='/login'>로그인</Link></button>
            </div>
        </>
        
    );
}

export default SignUpPage;