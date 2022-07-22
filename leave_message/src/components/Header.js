import '../styles/components/Header.css';

import { useState } from 'react';

const Header = ({pageName}) => {

    const [ titleDate ] = useState({
        main : {textTitle : localStorage.getItem('name')+".", textBtn : '설정'},
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
            
            <div onClick={move_page} className="Header-textBtn">
                {titleDate[pageName].textBtn}
            </div>
        </div>
    );
}

export default Header;