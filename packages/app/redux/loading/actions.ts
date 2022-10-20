import { AppAction } from '..';
import { LoadingState as LoadingState } from './reducer';

type LoadingActions<P = undefined> = AppAction<LoadingState, P>;

// Use the PayloadAction type to declare the contents of `action.payload`
export const showLoading: LoadingActions<boolean> = (
    state,
    action,
) => {
    state.isLoading = action.payload;
};

export const actions = {
    showLoading,
};
