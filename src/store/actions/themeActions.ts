import { Theme } from '../../types';
import DispatchActions from '../types/DispatchActions';

export const setTheme = (payload: Theme) => {
  return {
    type: DispatchActions.SET_THEME,
    payload,
  };
};
