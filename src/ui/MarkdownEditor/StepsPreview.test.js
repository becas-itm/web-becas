import React from 'react';
import { render, screen } from '@testing-library/react';
import { StepsPreview } from './StepsPreview';

test('renders correctly', () => {
  const { rerender } = render(<StepsPreview />);

  expect(screen.queryByText('Vista previa')).toBeInTheDocument();

  rerender(<StepsPreview src="# foo" />);
  expect(screen.queryByText('foo')).toBeInTheDocument();
});
