import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
  name: 'score',
  initialState:{
      score:0
  },
  reducers: {
    setScore: (state,{payload}) => {
      state.score = payload
    },
    incrementScore: (state,{payload}) =>{
      state.score += payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setScore , incrementScore } = scoreSlice.actions

export default scoreSlice.reducer