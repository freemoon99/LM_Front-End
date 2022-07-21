import '../../styles/components/modals/ResultModal.css'
import { Modal } from "react-bootstrap";

const ResultModal = (props) => {
    function showCreate(){
        window.location.href = '/create';
        return;
    }

    function resultBody() {
        if(props.state === "true"){
            return(
                <div className='ResultModal_Body_True'>
                    <div className='ResultModal_Content'>
                        이야기를 남길 준비가 되었네요!<br/>
                        소중한 사람에게 전할 말을 적어주세요.
                    </div>
                </div>
            )
        }
        else if(props.state === "false"){
            return(
                <div className='ResultModal_Body_False'>
                    <div className='ResultModal_Content'>
                        이야기를 남기기보다,<br/>
                        본인을 돌봐주는게 우선으로 보입니다.<br/>
                        다음에 꼭 다시 찾아주세요.
                    </div>
                    <div className='ResultModal_False_LinkBox'>
                        <div className='ResultModal_False_LinkTitle'>
                            도움을 받아보세요.
                        </div>
                        <div className='ResultModal_False_Link'>
                            링크
                        </div>
                    </div>
                </div>
            )
        }
    }

    function resultFooter() {
        if(props.state === "true"){
            return(
                <div className='ResultModal_Footer_True'>
                    <div onClick={props.onHide}>
                        뒤로가기
                    </div>
                    <div onClick={showCreate}>
                        작성하기
                    </div>
                </div>
            )
        }
        else if(props.state === "false"){
            return(
                <div className='ResultModal_Footer_False'
                    onClick={props.onHide}>
                    뒤로가기
                </div>
            )
        }
    }

    return(
        <div className="ResultModal">
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className='ResultModal_Header_Title'>
                            당신은 지금,
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='ResultModal_Body'>
                    {resultBody()}
                </Modal.Body>

                <Modal.Footer className='ResultModal_Footer_Box'>
                    {resultFooter()}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ResultModal;