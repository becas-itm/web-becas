import React from 'react';
import { render } from '@testing-library/react';
import EmptyState from './index';

test('should render component', () => {
  const title = 'foo';
  const { getByText } = render(<EmptyState title={title} />);
  expect(getByText('foo')).toBeInTheDocument();
});

test('should render description when passed ', () => {
  const description = 'foo';
  const { getByText } = render(
    <EmptyState description={description} title="bar" />,
  );
  expect(getByText('foo')).toBeInTheDocument();
});

test('should render action when passed ', () => {
  const action = 'foo';
  const { getByText } = render(
    <EmptyState description="bar" title="buz">
      {action}
    </EmptyState>,
  );
  expect(getByText('foo')).toBeInTheDocument();
});
