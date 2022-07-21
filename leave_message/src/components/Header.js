import '../styles/components/Header.css';

import { useState } from 'react';

const Header = ({pageName}) => {

<<<<<<< HEAD
    const [ titleDate ] = useState({
=======
    // 1.
    // localStorage.getItem(name) 가져와서 변수에 저장
    // const [ userName, setUserName ] = useState('익명');
    // 만약 localStorage.getItem(name)이 있으면 setUserName();

    function movePageHandler(e)
    {
        console.log(e.target.innerText);
        // 2.
        // 만약 "설정" 이면 navigate('settings');
        // 만약 "뒤로가기" 이면 navigate(-1);
    }

    const [ titleDate, setTitleDate ] = useState({
>>>>>>> feature
        main : {textTitle : '구현우님.', textBtn : '설정'},
        create : {textTitle : '작성하기.', textBtn : '뒤로가기'},
        update : {textTitle : '수정하기.', textBtn : '뒤로가기'},
        setting : {textTitle : '설정', textBtn : '뒤로가기'},
    });

    function move_page() {
        titleDate[pageName].textBtn === '설정' 
        ? window.location.href = '/settings'
        : window.location.replace('/');
    }

    return(
        <div className="Header">
            
            <div className="Header-textTitle-Box">
                <div className="Header-textTitle-text">
                    {titleDate[pageName].textTitle}
                </div>
                <div className="Header-textTitle-line"></div>
            </div>
            
<<<<<<< HEAD
            <div onClick={move_page} className="Header-textBtn">
                {titleDate[pageName].textBtn}
            </div>
=======
            <div className="Header-textBtn" onClick={movePageHandler}>{titleDate[pageName].textBtn}</div>
>>>>>>> feature
        </div>
    );
}

export default Header;