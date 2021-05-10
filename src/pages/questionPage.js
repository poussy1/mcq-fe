import React from 'react'
import { useSelector } from 'react-redux'
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
  const shownQuestionId = useSelector(state=>state.shownQuestionId.shownQuestionId)
   return(<>
      <Container> 
        { 
          shownQuestionId==5?<Grade/>:<Question/>
        }
      </Container>
     </>
   )
}