
import CreateForm from "../components/forms/CreateForm";
import Header from "../components/Header"
import '../styles/pages/CreatePage.css'

const CreatePage = () => {

    const pageName = 'create';
    
    return(
        <div className="CreatePage">
            <Header pageName={pageName}/>
            <CreateForm className="CreatePage_CreateForm"></CreateForm>
        </div>
    );
}

export default CreatePage;