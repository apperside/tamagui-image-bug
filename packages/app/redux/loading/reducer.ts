import { createSlice } from '@reduxjs/toolkit'
import { actions as reducers } from './actions'

export type LoadingState = {
  isLoading: boolean
}
// Define the initial state using that type
const initialState: LoadingState = {isLoading:false}

const loadingSlice = createSlice({
  name: 'merchants',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers,
})

// export const merchantsActions = merchantsSlice.actions

export const loadingReducer = loadingSlice.reducer
export const loadingActions = loadingSlice.actions
