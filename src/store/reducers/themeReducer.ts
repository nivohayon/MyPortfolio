import { Theme } from '../../types';
import DispatchActions from '../types/DispatchActions';

const savedTheme = localStorage.getItem('theme') as Theme;

export const initialState: Theme = savedTheme ?? 'dark';

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
