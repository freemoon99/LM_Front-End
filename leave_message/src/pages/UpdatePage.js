import Header from "../components/Header";
import CreateForm from "../components/forms/CreateForm";
import '../styles/pages/UpdatePage.css'

const UpdatePage = () => {

    const pageName = 'update';

    return(
        <div className="UpdatePage">
            <Header pageName={pageName}/>
            <CreateForm state={pageName} className="UpdatePage_CreateForm"></CreateForm>
        </div>
    );
}

export default UpdatePage;