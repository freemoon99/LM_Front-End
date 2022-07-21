import '../../styles/components/modals/SurveyModal.css'
import { Modal } from "react-bootstrap";
import SurveyList from '../../json/SurveyList.json'
import { useEffect, useState } from 'react';
import ResultModal from './ResultModal';

const SurveyModal = (props) => {
    const [score, setScore] = useState(['', '', '', '', '', '', '', '', '', '']);
    const [showResult, setShowResult] = useState(false);
    const [resultState, setResultState] = useState(false);

    useEffect(()=>{
        setScore(['', '', '', '', '', '', '', '', '', '']);
    },[props.onHide])

    function saveScore(index, num){
        const tempList = score;
        tempList[index] = num;
        setScore(tempList);
    }

    function showSurveyList(){
        const list = []
        for(let i = 0; i < 10; i++){
            list.push(
                <div className='SurveyList_Box' key={i}>
                    <div className='SurveyList_Title'>
                        {(i+1)+ '. ' + SurveyList[`${i}`].title}
                    </div>
                    <div className='SurveyList_Content'>
                        <div className='SurveyList_Item'>
                            <div className='SurveyList_Item_Text'>
                                {'가) '+SurveyList[`${i}`].first}
                            </div>
                            <input type='radio' name={i} value='0' 
                                className='SurveyList_Item_Input'
                                onClick={()=>{saveScore(i, 0);}}/>
                        </div>
                        <div className='SurveyList_Item'>
                            <div className='SurveyList_Item_Text'>
                                {'나) '+SurveyList[`${i}`].second}
                            </div>
                            <input type='radio' name={i} value='1'
                                className='SurveyList_Item_Input'
                                onClick={()=>{saveScore(i, 1);}}/>
                        </div>
                        <div className='SurveyList_Item'>
                            <div className='SurveyList_Item_Text'>
                                {'다) '+SurveyList[`${i}`].third}
                            </div>
                            <input type='radio' name={i} value='2'
                                className='SurveyList_Item_Input'
                                onClick={()=>{saveScore(i, 2);}}/>
                        </div>
                    </div>
                </div>
            );
        }
        return list;
    }

    function goBack(){
        props.onHide();
    }

    function checkScore(){
        let limit_two_point = 0;
        let limit_point = 0;

        if(score.includes('')){
            alert('아직 채우지않은 항목이 있습니다.')
            return;
        }

        score.forEach(number => {
            if(number === 2){
                limit_two_point += 2;
                limit_point += 2;
            }
            else if(number === 1){
                limit_point += 1;
            }
        })

        if(limit_two_point > 6 || limit_point > 8){
            setResultState(false);
        }
        else{
            setResultState(true);
        }

        if(window.confirm('결과 화면으로 넘어갑니다.\n항목을 제대로 입력하셨나요?')){
            setShowResult(true);
            props.onHide();
            return;
        }
    }

    return(
        <div className="SurveyModal">
            <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className='SurveyModal_Header_Title'>
                            지금 어떠신가요?
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='SurveyModal_Body'>
                    {showSurveyList()}
                </Modal.Body>

                <Modal.Footer className='SurveyModal_Footer_Box'>
                    <div className='SurvayModal_Footer'>
                        <div onClick={goBack}>
                            뒤로가기
                        </div>
                        <div onClick={checkScore}>
                            제출하기
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

            <ResultModal
                show = {showResult}
                onHide = {()=> setShowResult(false)}
                state = {`${resultState}`}
            />
        </div>
    );
}

export default SurveyModal;