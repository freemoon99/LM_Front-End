import Header from "../components/Header";

const SettingsPage = () => {

    const pageName = 'setting';

    return(
        <>
            <Header pageName={pageName}/>
            <h2>설정 페이지</h2>
        </>
    );
}

export default SettingsPage;