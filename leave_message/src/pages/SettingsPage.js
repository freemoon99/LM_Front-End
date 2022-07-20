import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/SettingsPage.css";

const SettingsPage = () => {

    const pageName = 'setting';

    return(
        <div className="frame-settingsPage">
            <Header pageName={pageName} className="frame-settingsPage-header"/>
            
            <div className="frame-settingsPage-body">
                <h2>설정 페이지</h2>
            </div>

            <Footer className="frame-settingsPage-footer"/>
        </div>
    );
}

export default SettingsPage;