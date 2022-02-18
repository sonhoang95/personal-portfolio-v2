import React, { useContext, useReducer } from 'react';
import { global_reducer } from '../reducer/global_reducer';

export interface GlobalContextProps {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const initialState = {
  isSidebarOpen: false,
  openSidebar: () => {
    return;
  },
  closeSidebar: () => {
    return;
  },
};
export const GlobalContext = React.createContext({} as GlobalContextProps);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(global_reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };
  return (
    <GlobalContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
