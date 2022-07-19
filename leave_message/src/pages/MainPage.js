import Header from "../components/Header";

const MainPage = () => {

    const pageName = 'main';

    return(
        <>
            <Header pageName={pageName}/>
            <h2>메인 페이지</h2>
        </>
    );
}

export default MainPage;