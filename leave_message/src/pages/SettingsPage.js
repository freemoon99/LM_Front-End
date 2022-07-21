import Header from "../components/Header";
import Footer from "../components/Footer";
import Out from "../components/Out";
import "../styles/pages/SettingsPage.css";

const SettingsPage = () => {

    const pageName = 'setting';

    return(
        <div className="frame-settingsPage">
            <Header pageName={pageName} className="frame-settingsPage-header"/>
            
            <div className="frame-settingsPage-body">
                <Out />
                
                <div className="settingsPage-flower-img-text">
                    <img src="images/LM_flower_45.png" alt="이미지를 불러오지 못했습니다."/>
                    <p>금잔화의 꽃말은 <br/>이별의 슬픔이다.</p>
                </div>
            </div>

            <Footer className="frame-settingsPage-footer"/>
        </div>
    );
}

export default SettingsPage;