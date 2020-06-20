import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, act } from '@testing-library/react';

import { useAuth } from '../hooks';
import { DEFAULT_ROUTES } from '../constants';
import { AuthProvider } from '../AuthProvider';
import { PrivateRoute } from '../PrivateRoute';

function renderWithRouter(ui, historyOptions) {
  const history = createMemoryHistory(historyOptions);
  return {
    ...render(ui, {
      wrapper: ({ children }) => <Router history={history}>{children}</Router>,
    }),
    history,
  };
}

const AuthButtons = ({ user }) => {
  const auth = useAuth();
  return (
    <div>
      <button onClick={() => auth.login(user)}>login</button>
      <button onClick={() => auth.logout()}>logout</button>
    </div>
  );
};

test('successfully login', () => {
  const user = { name: 'john' };

  const TestPage = () => {
    const { user } = useAuth();
    return <div>{user?.name}</div>;
  };

  const { history } = renderWithRouter(
    <AuthProvider>
      <AuthButtons user={user} />
      <TestPage />
    </AuthProvider>,
  );

  userEvent.click(screen.getByText('login'));
  expect(screen.getByText(user.name)).toBeInTheDocument();
  expect(history.location.pathname).toBe(DEFAULT_ROUTES.afterLogin);

  userEvent.click(screen.getByText('logout'));
  expect(screen.queryByText(user.name)).not.toBeInTheDocument();
  expect(history.location.pathname).toBe(DEFAULT_ROUTES.afterLogout);
});

test('direct access to private route redirects to auth page', () => {
  const privateRoute = '/private';
  const PrivatePage = () => <div>private content</div>;

  const { history } = renderWithRouter(
    <AuthProvider>
      <AuthButtons user />
      <Switch>
        <PrivateRoute exact path={privateRoute}>
          <PrivatePage />
        </PrivateRoute>
      </Switch>
    </AuthProvider>,
  );

  expect(history.location.pathname).toBe('/');
  act(() => history.push(privateRoute));

  expect(history.location.pathname).toBe('/login');
  expect(screen.queryByText('private content')).not.toBeInTheDocument();

  userEvent.click(screen.getByText('login'));
  expect(history.location.pathname).toBe(privateRoute);
  expect(screen.queryByText('private content')).toBeInTheDocument();
});

test('initial user', () => {
  const user = { name: 'jane' };

  const TestPage = () => {
    const { user } = useAuth();
    return <div>{user?.name}</div>;
  };

  renderWithRouter(
    <AuthProvider initialUser={user}>
      <TestPage />
    </AuthProvider>,
  );

  expect(screen.queryByText(user.name)).toBeInTheDocument();
});
