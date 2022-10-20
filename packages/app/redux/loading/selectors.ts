import {createSelector} from '@reduxjs/toolkit';
import {AppState} from '..';

const loadingSlice = (state: AppState) => state.loadig;

export const isLoadingSelector = createSelector(
  loadingSlice,
  slice => slice.isLoading,
);

export const merchantsSelectors = {
  isLoadingSelector,
};
