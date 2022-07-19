import CreateForm from "../components/forms/CreateForm";
import Header from "../components/Header"

const CreatePage = () => {
    return(
        <div className="CreatePage">
            <Header></Header>
            <CreateForm></CreateForm>
        </div>
    );
}

export default CreatePage;