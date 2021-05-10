import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
  name: 'name',
  initialState:{
      name:null
  },
  reducers: {
    setName: (state,{payload}) => {
      state.name = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setName } = nameSlice.actions

export default nameSlice.reducer