import { createSlice } from '@reduxjs/toolkit'
import { shuffleArray } from '../helper/helper'
const questionsInitalValue = [{
    questionText:"what's your name?",
    questionAnswers:shuffleArray(["answer1",'answer2','answer3','answer4']),
  },{
    questionText:"what's your weight?",
    questionAnswers:shuffleArray(["answer1",'answer2','answer3','answer4']),
  },{
    questionText:"what's your height?",
    questionAnswers:shuffleArray(["answer1",'answer2','answer3','answer4']),
  },{
    questionText:"what's your eyes color?",
    questionAnswers:shuffleArray(["answer1",'answer2','answer3','answer4']),
  },{
    questionText:"what's your hair color?",
    questionAnswers:shuffleArray(["answer1",'answer2','answer3','answer4']),
  }
]

export const questionsSlice = createSlice({
  name: 'questions',
  initialState:{
    questions:shuffleArray(questionsInitalValue)
  },
  reducers: {
    setQuestions: (state,{payload}) => {
      state.questions = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setQuestions } = questionsSlice.actions

export default questionsSlice.reducer