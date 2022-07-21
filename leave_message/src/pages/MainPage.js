import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/MainPage.css";
import MenuList from "../components/MenuList";

const MainPage = () => {

    const pageName = 'main';

    return(
        <div className="frame-mainPage">
            <div className="frame-mainPage-header">
                <Header pageName={pageName}/>
            </div>
            
            <div className="frame-mainPage-body">
                <MenuList/>
            </div>

            <div className="frame-mainPage-footer">
                <Footer/>
            </div>
        </div>
    );
}

export default MainPage;