import Header from "../components/Header";

const CreatePage = () => {

    const pageName = 'create';
    
    return(
        <>
            <Header pageName={pageName}/>
            <h2>작성하기 페이지</h2>
        </>
    );
}

export default CreatePage;