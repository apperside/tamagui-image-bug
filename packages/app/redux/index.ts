import { CaseReducer, configureStore, PayloadAction } from '@reduxjs/toolkit'
// import { connectRouter, routerMiddleware } from "connected-react-router";
// import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux'
import { loadingActions, loadingReducer } from './loading/reducer'

import { merchantsSelectors as loadingSelectors } from './loading/selectors'

// export const history = createBrowserHistory();
export function getHistory() {
  return history
}

const reducers = combineReducers({
  loadig: loadingReducer,
})

export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})



export const appSelectors = {
  loading: loadingSelectors,
}

export const appActions = {
  loading: loadingActions,
};

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof reducers>
export type AppAction<State = undefined, Payload = undefined> = CaseReducer<
  State,
  PayloadAction<Payload>
>
export type AppDispatch = typeof store.dispatch

export type AppThunk<R> = (
  dispatch?: any,
  getState?: () => AppState
) => Promise<R>
