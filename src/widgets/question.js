import React,{useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CardActions from '@material-ui/core/CardActions';

import { useDispatch } from 'react-redux'
import { incrementScore } from '../store/scoreSlice'
import { incrementShownQuestionId } from '../store/shownQuestionIdSlice'
import { useSelector } from 'react-redux'

import styled from "styled-components";

const CardContainer =styled.div`
    max-width:800px;
    selfAlign:center;
`
const CardContainerPadding = styled.div`
    padding:20px
`
export default function Question(){

    const [checked, setChecked] = useState({
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false
    });

    const dispatch = useDispatch() 
    const shownQuestionId = useSelector(state=>state.shownQuestionId.shownQuestionId)
    const questionDetails = useSelector(state=>state.questions.questions[shownQuestionId])
  
    const resetCheckBoxes = () =>{
        setChecked({
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false
        })
    }
    const updateScore=()=>{
        var correctAnswerId = Math.floor(Math.random() * (4))
        var checkedStateArray = Object.entries(checked)
        var selectedAnswerIndex = checkedStateArray.findIndex(function(selectedAnswer, index) {
            if(selectedAnswer[1] == true)
                return true;
        })
        if(selectedAnswerIndex == correctAnswerId){
            dispatch(incrementScore(1))
        }
    }
    const handleButtonClick = () =>{ 
        resetCheckBoxes()
        dispatch(incrementShownQuestionId())
        updateScore()
    }
    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };
    return (
    <>
        <CardContainer>
            <Card>
                <CardContainerPadding>
                    <CardContent>
                        <Typography style={{textAlign:'left'}} variant="h5" component="h2">
                           Q({shownQuestionId+1}):{questionDetails.questionText}
                        </Typography>
                        <FormGroup >
                            <FormControlLabel
                                value={checked.checked1}
                                control={<Checkbox size="small" checked={checked.checked1} onChange={handleChange} name="checked1" color="primary" />}
                                label={questionDetails.questionAnswers[0]}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value={checked.checked2}
                                control={<Checkbox size="small" checked={checked.checked2} onChange={handleChange} name="checked2" color="primary" />}
                                label={questionDetails.questionAnswers[1]}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value={checked.checked3}
                                control={<Checkbox size="small" checked={checked.checked3} onChange={handleChange} name="checked3" color="primary" />}
                                label={questionDetails.questionAnswers[2]}
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value={checked.checked4}
                                control={<Checkbox size="small" checked={checked.checked4} onChange={handleChange} name="checked4" color="primary" />}
                                label={questionDetails.questionAnswers[3]}
                                labelPlacement="end"
                            />
                        </FormGroup> 
                    </CardContent>
                    <CardActions  style={{justifyContent: 'space-around'}}>
                        <Button  onClick={()=>handleButtonClick()} size="small">Submit</Button>
                    </CardActions> 
                </CardContainerPadding>
            </Card>
        </CardContainer>
    </>
    )
}