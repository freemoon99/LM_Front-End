import React from 'react';
import '../styles/pages/LoginPage.css'
import LoginForm from './../components/forms/LoginForm';
import { Link } from 'react-router-dom';


function LoginPage() {
    return (
        <div className='Box'>
            <img id='banner' src='/images/logo.png' alt='사진이 없습니다'/>
            <LoginForm />
            <br />
            <button type='button' className='signBtn'><Link to='/signup'>회원가입</Link></button>
        </div>
    );
}

export default LoginPage;