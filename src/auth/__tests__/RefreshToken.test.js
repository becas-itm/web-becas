import React from 'react';
import { render, act } from '@testing-library/react';

import { AuthContext } from '../AuthContext';
import { RefreshToken } from '../RefreshToken';

// TEST: Assert `onRefresh` prop is called

test('successfully refreshes token N times', async () => {
  jest.useFakeTimers();

  const token = 'test';
  const expiresIn = 2500;
  const totalRefreshes = 2;
  const payload = { token, expiresIn };
  const fetcher = jest.fn().mockResolvedValue(payload);

  render(
    <AuthContext.Provider value={{ user: { expiresIn } }}>
      <RefreshToken fetcher={fetcher} />
    </AuthContext.Provider>,
  );

  act(() => jest.advanceTimersByTime(expiresIn * totalRefreshes));

  expect(fetcher).toHaveBeenCalledTimes(totalRefreshes);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), expiresIn);
});

test('should not refresh if there is not `expiresIn`', () => {
  jest.useFakeTimers();

  const fetcher = jest.fn();
  const user = null;

  render(
    <AuthContext.Provider value={{ user }}>
      <RefreshToken fetcher={fetcher} />
    </AuthContext.Provider>,
  );

  expect(fetcher).not.toHaveBeenCalled();
});
