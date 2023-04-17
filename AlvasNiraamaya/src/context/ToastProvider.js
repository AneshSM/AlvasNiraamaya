import React, {createContext} from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({children}) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};
