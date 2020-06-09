import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import MarkdownEditor from './MarkdownEditor';

test('renders correctly', () => {
  render(<MarkdownEditor />);

  expect(screen.queryByTestId('MarkdownEditor')).toBeInTheDocument();

  const textarea = screen.getByDisplayValue('');
  expect(textarea.tagName).toBe('TEXTAREA');
  expect(textarea).toHaveProperty('rows', 2);
});

test('placeholder is passed', () => {
  const placeholder = 'foo bar';
  render(<MarkdownEditor placeholder={placeholder} />);
  expect(screen.queryByPlaceholderText(placeholder)).toBeInTheDocument();
});

test('controlled textarea', () => {
  const onChange = jest.fn();
  render(<MarkdownEditor value="foo" onChange={onChange} />);

  const textarea = screen.getByDisplayValue('foo');
  userEvent.type(textarea, 'bar');
  expect(textarea).toHaveValue('foobar');
  expect(onChange).toHaveBeenCalled();
});
