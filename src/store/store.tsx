import React, { Dispatch, ReactNode, useReducer } from 'react';
import { Theme } from '../types';
import * as themeReducer from './reducers/themeReducer';

interface IContext {
  state: {
    theme: Theme;
  };
  dispatchers: {
    dispatchTheme: Dispatch<themeReducer.ThemeReducerActionType>;
  };
}

interface StateProviderProps {
  children: ReactNode;
}

export const Store = React.createContext(null as unknown as IContext);

const StoreProvider = ({ children }: StateProviderProps) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer.ThemeReducer,
    themeReducer.initialState
  );

  const value: IContext | null = {
    state: {
      theme: themeState,
    },
    dispatchers: {
      dispatchTheme,
    },
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export default StoreProvider;
