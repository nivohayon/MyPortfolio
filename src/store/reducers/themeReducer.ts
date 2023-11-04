import { Theme } from '../../types';
import DispatchActions from '../types/DispatchActions';

export const initialState: Theme = 'dark';

export type ThemeReducerActionType = {
  type: typeof DispatchActions.SET_THEME;
  payload: Theme;
};

export const ThemeReducer = (
  state: Theme = initialState,
  action: ThemeReducerActionType
) => {
  switch (action.type) {
    case DispatchActions.SET_THEME:
      return action.payload;
    default:
      return state;
  }
};
