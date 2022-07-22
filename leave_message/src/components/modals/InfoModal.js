import '../../styles/components/modals/InfoModal.css'
import { Modal } from "react-bootstrap";
import { useState } from 'react';

const InfoModal = (props) => {
    function checkInfoState(){
        if(props.state === 0){
            return(
                <div>
                    당신이 남길 이야기를 적어주세요.
                </div>
            )
        }
        else if(props.state === 1){
            return(
                <div>
                    이야기를 받을 사람들입니다.
                    <br/>한명 이상, 이메일 형식으로 적어주세요.
                </div>
            )
        }
        else if(props.state === 2){
            return(
                <div>
                    이야기를 전송해도 되는지 확인하는 코드 발송 주기입니다.
                    <br/>선택하신 주기마다 이메일로 코드가 발송됩니다.
                </div>
            )
        }
        else{
            return(
                <div>
                    전송주기부터 n일간 코드를 발송합니다.
                    <br/>n일 안에 코드 미인증 시 작성하신 이야기가 발송됩니다.
                </div>
            )
        }
    }


    return(
        <div className="InfoModal">
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="sm"
            >
                <Modal.Header onClick={props.onHide} className='InfoModal_Header'>
                    닫기
                </Modal.Header>

                <Modal.Body className='InfoModal_Body'>
                    {checkInfoState()}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default InfoModal;