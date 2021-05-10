import React,{useState} from 'react'
import Question from '../widgets/question.js'
import Grade from '../widgets/grade.js'
import styled from "styled-components";
import { shuffleArray } from '../helper/helper'
const Container =styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 60vh;
`

const questionsInitalValue = [{
      questionText:"what's your name?",
      questionAnswers:shuffleArray(["answer1",'answer2','answer3']),
    },{
      questionText:"what's your weight?",
      questionAnswers:shuffleArray(["answer1",'answer2','answer3']),
    },{
      questionText:"what's your height?",
      questionAnswers:shuffleArray(["answer1",'answer2','answer3']),
    }
]
export default function QuestionPage(){
  
   const [questions,setQuestions]=useState(shuffleArray(questionsInitalValue))
   const [shownQuestionId,setShownQuestionId] = useState(0);
   return(<>
      <Container> 
        { 
          shownQuestionId==3?<Grade/>:
            <Question 
              questionDetails={questions[shownQuestionId]} 
              setShownQuestionId={setShownQuestionId}
            />
        }
      </Container>
     </>
   )
}