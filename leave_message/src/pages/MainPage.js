import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/MainPage.css";

const MainPage = () => {

    const pageName = 'main';

    return(
        <div className="frame-mainPage">
            <div className="frame-mainPage-header">
                <Header pageName={pageName}/>
            </div>
            
            <div className="frame-mainPage-body">
                <h2>메인 페이지</h2>
            </div>

            <div className="frame-mainPage-footer">
                <Footer/>
            </div>
        </div>
    );
}

export default MainPage;