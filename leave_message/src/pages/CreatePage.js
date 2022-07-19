
import CreateForm from "../components/forms/CreateForm";
import Header from "../components/Header"

const CreatePage = () => {

    const pageName = 'create';
    
    return(
        <div className="CreatePage">
            <Header pageName={pageName}/>
            <CreateForm></CreateForm>
        </div>
    );
}

export default CreatePage;