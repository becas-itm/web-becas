import React from 'react';
import { useMount } from 'react-use';
import { useHistory } from 'react-router-dom';

import token from './token';
import { useRefreshToken } from './useRefreshToken';
import { LOGIN_PATH, ADMIN_PATH } from './constants';

export const AuthContext = React.createContext(null);

export default function AuthProvider({ user: initialUser, children }) {
  const history = useHistory();
  const refreshCountdown = useRefreshToken();
  const [user, setUser] = React.useState(initialUser || null);

  function signOut() {
    console.log('SIGNING OUT');
    token.clean();
    refreshCountdown.stop();
    setUser(null);
    history.push(LOGIN_PATH);
  }

  function setCurrentUser({ token: accessToken, expiresIn, ...user }) {
    setUser(user);
    token.setToken(accessToken, expiresIn);
    countRefresh(expiresIn);
  }

  async function countRefresh(timeout) {
    console.log('INIT COUNTDOWN', timeout);
    const refreshedUser = await refreshCountdown.restart(timeout);

    if (refreshedUser) {
      setCurrentUser(refreshedUser);
    } else {
      signOut();
    }
  }

  useMount(() => {
    if (token.exists) {
      countRefresh(token.getExpiresIn());
    }
  });

  function signIn(user) {
    console.log('USER AUTHENTICATED');
    setCurrentUser(user);
    history.push(ADMIN_PATH);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
