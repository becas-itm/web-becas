import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './index';

const barId = 'SearchBar';
const inputId = 'SearchBar__input';
const clearButtonId = 'SearchBar__clearButton';

const getInput = () => screen.queryByTestId(inputId);

const getClearButton = () => screen.queryByTestId(clearButtonId);

const renderSearchBar = (props = {}) => render(<SearchBar {...props} />);

it('should render correctly', () => {
  renderSearchBar();

  const input = getInput();
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('');
  expect(input).toHaveProperty('placeholder', '');

  const searchBar = screen.queryByTestId(barId);
  expect(searchBar).toBeInTheDocument();
});

test('default initial value', () => {
  const value = 'foo';
  const { rerender } = renderSearchBar({ defaultValue: value });

  const input = getInput();
  expect(input).toHaveValue(value);

  // ensure it only clears with the `Escape` key
  userEvent.type(input, '{del}');
  expect(input).toHaveValue(value);
  userEvent.type(input, '{esc}');
  expect(input).toHaveValue('');

  rerender(<SearchBar defaultValue="bar" />);
  expect(input).toHaveValue('bar');
});

it('should call `onSubmit` when `Enter` key is pressed', () => {
  const onSubmit = jest.fn();
  renderSearchBar({ onSubmit });
  userEvent.type(getInput(), 'foo{enter}');
  expect(onSubmit).toHaveBeenCalledWith('foo');
});

test('clear button should only be visible if there is value', () => {
  const { rerender } = renderSearchBar({ defaultValue: '' });
  expect(getClearButton()).not.toBeInTheDocument();

  const input = getInput();
  userEvent.type(input, 'foo');
  expect(getClearButton()).toBeInTheDocument();

  rerender(<SearchBar defaultValue="bar" />);
  expect(getClearButton()).toBeInTheDocument();

  userEvent.click(getClearButton());
  expect(input).toHaveValue('');
  expect(input).toHaveFocus();
});

test('should render placeholder', () => {
  renderSearchBar({ placeholder: 'foo' });
  expect(screen.queryByPlaceholderText('foo')).toBeInTheDocument();
});
