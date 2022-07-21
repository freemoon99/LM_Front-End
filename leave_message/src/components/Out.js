import "../styles/components/Out.css";

function logoutHandler()
{
    console.log('로그아웃');
    // 1.
    // window.comfirm()
    // localStorage.removeItem(key)
    // localStorage.clear()
    // navigate('/login')
}

function byeHandler()
{
    console.log('회원탈퇴');
    // 2.
    // window.comfirm()
    // axios({
    //     method: 'delete',
    //     url: '/user?ID=****',
    //     data: {
    //         token: 'token'
    //     }
    // })
    // localStorage.removeItem(key)
    // localStorage.clear()
    // navigate('/login')
}

const Out = () => {
    return(
        <div className="Out">
            <div className="Out-logout-btn" onClick={logoutHandler}>로그아웃</div>
            <div className="Out-withdrawal-btn" onClick={byeHandler}>회원탈퇴</div>
        </div>
    );
}

export default Out;