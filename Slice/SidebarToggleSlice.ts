import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../Store'

// Define a type for the slice state
interface CounterState {
  value: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false,
}

export const sideBarToggle = createSlice({
  name: 'toggle',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTrue: (state) => {
      state.value = true
    },
    toggleFalse: (state) => {
      state.value = false
    },
  },
})

export const { toggleTrue, toggleFalse } = sideBarToggle.actions

// Other code such as selectors can use the imported `RootState` type
export const sideBartoggle = (state: RootState) => state.toggle.value

export default sideBarToggle.reducer
