import { useState } from 'react';

const Header = ({pageName}) => {

    const [ titleDate, setTitleDate ] = useState({
        main : {textTitle : '구현우님.', textBtn : '설정'},
        create : {textTitle : '작성하기.', textBtn : '뒤로가기'},
        update : {textTitle : '수정하기.', textBtn : '뒤로가기'},
        setting : {textTitle : '설정', textBtn : '뒤로가기'},
    });

    return(
        <div className="Header">
            {titleDate[pageName].textTitle}
            {titleDate[pageName].textBtn}
        </div>
    );
}

export default Header;