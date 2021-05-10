import { createSlice } from '@reduxjs/toolkit'

export const shownQuestionIdSlice = createSlice({
  name: 'shownQuestionId',
  initialState:{
    shownQuestionId:0
  },
  reducers: {
    setShownQuestionId: (state,{payload}) => {
      state.shownQuestionId = payload
    },
    incrementShownQuestionId: (state,{payload}) =>{
      state.shownQuestionId += 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { setShownQuestionId , incrementShownQuestionId } = shownQuestionIdSlice.actions

export default shownQuestionIdSlice.reducer