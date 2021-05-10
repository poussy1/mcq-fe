import { configureStore } from '@reduxjs/toolkit'
import  nameReducer  from './nameSlice'
import  scoreReducer  from './scoreSlice'
import  questionsReducer  from './questionSlice'
import  shownQuestionIdSliceReducer  from './shownQuestionIdSlice'
export default configureStore({
  reducer: {
    name:nameReducer,
    score:scoreReducer,
    questions:questionsReducer,
    shownQuestionId:shownQuestionIdSliceReducer
  },
})