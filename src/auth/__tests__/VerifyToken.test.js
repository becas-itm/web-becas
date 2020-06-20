import React from 'react';
import { queryCache } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';

import { VerifyToken } from '../VerifyToken';

beforeEach(queryCache.clear);

test('successfully verification', async () => {
  const fakeUser = { name: 'john doe' };
  const fetcher = jest.fn().mockResolvedValue(fakeUser);
  const childFn = jest.fn().mockReturnValue(null);

  render(
    <MemoryRouter>
      <React.Suspense fallback={null}>
        <VerifyToken fetcher={fetcher}>{childFn}</VerifyToken>
      </React.Suspense>
    </MemoryRouter>,
  );

  await waitFor(() => expect(childFn).toHaveBeenCalled());
  expect(childFn.mock.calls[0][0]).toHaveProperty('user', fakeUser);
});

test('error', async () => {
  const fetcher = jest.fn().mockResolvedValue(null);
  const childFn = jest.fn().mockReturnValue(null);

  render(
    <MemoryRouter>
      <React.Suspense fallback={null}>
        <VerifyToken fetcher={fetcher}>{childFn}</VerifyToken>
      </React.Suspense>
    </MemoryRouter>,
  );

  await waitFor(() => {
    expect(childFn).toHaveBeenCalled();
    expect(childFn.mock.calls[0][0]).toHaveProperty('user', null);
  });
});

test('exclude routes', async () => {
  const fetcher = jest.fn();
  const childFn = jest.fn().mockReturnValue(null);

  const excludedRoute = '/';

  render(
    <MemoryRouter initialEntries={[excludedRoute]}>
      <React.Suspense fallback={null}>
        <VerifyToken excludedRoutes={[excludedRoute]} fetcher={fetcher}>
          {childFn}
        </VerifyToken>
      </React.Suspense>
    </MemoryRouter>,
  );

  await waitFor(() => expect(childFn).toHaveBeenCalled());
  expect(childFn.mock.calls[0][0]).toHaveProperty('user', null);

  expect(fetcher).not.toHaveBeenCalled();
});
