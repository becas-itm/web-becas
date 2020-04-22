import React from 'react';

import { SnackbarContainer } from './SnackbarContainer';

const SnackbarContext = React.createContext();

function useSnackbar() {
  return React.useContext(SnackbarContext);
}

function SnackbarProvider({ children }) {
  const ref = React.useRef();
  const snackbar = { show: (...args) => ref.current.show(...args) };
  return (
    <SnackbarContext.Provider value={snackbar}>
      {children}
      <SnackbarContainer ref={ref} />
    </SnackbarContext.Provider>
  );
}

export { useSnackbar, SnackbarProvider };
