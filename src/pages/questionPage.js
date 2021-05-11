import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setQuestions } from '../store/questionSlice'
import styled from "styled-components";


import Question from '../widgets/question.js'
import Grade from '../widgets/grade.js'

const Container =styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 60vh;
`


export default function QuestionPage(){
  const dispatch = useDispatch()  
  const shownQuestionId = useSelector(state=>state.shownQuestionId.shownQuestionId)
  useEffect(()=>{
    fetch('http://localhost:3000/api/questionModel/randomFiveQuestions')
    .then(response => response.json())
    .then(data => dispatch(setQuestions(data)));
  },[])
  return(<>
      <Container> 
        { 
          shownQuestionId==5?<Grade/>:<Question/>
        }
      </Container>
     </>
  )
}