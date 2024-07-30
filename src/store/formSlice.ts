import { createSlice } from '@reduxjs/toolkit'

export interface FormState {}

const initialState: FormState = {}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
})

export const {} = formSlice.actions

export default formSlice.reducer
