import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar, { SearchBarButton } from './index';

const barId = 'SearchBar';
const inputId = 'SearchBar__input';

describe('Search Bar ', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(<SearchBar />);
    expect(queryByTestId(barId)).toBeInTheDocument();
  });

  it('should render a `form` element', () => {
    const { getByTestId } = render(<SearchBar />);
    expect(getByTestId(barId).tagName).toBe('FORM');
  });

  it('should render an input element', () => {
    const { queryByTestId } = render(<SearchBar />);
    expect(queryByTestId(inputId)).toBeInTheDocument();
  });

  describe('default value', () => {
    it('should be empty by default', () => {
      const { getByTestId } = render(<SearchBar />);
      const input = getByTestId(inputId);
      expect(input).toHaveValue('');
    });

    it('should be the given value', () => {
      const defaultValue = 'foo';
      const { getByTestId } = render(<SearchBar defaultValue={defaultValue} />);
      const input = getByTestId(inputId);
      expect(input).toHaveValue(defaultValue);
    });

    it('`Escape` key should clear value', () => {
      const { getByTestId } = render(<SearchBar defaultValue="bar" />);
      const input = getByTestId(inputId);
      fireEvent.keyDown(input, { key: 'Escape' });
      expect(input).toHaveValue('');
    });

    it('`Escape` key should not trigger `onChange`', () => {
      const onChangeSpy = jest.fn();
      const { getByTestId } = render(<SearchBar onChange={onChangeSpy} />);
      const input = getByTestId(inputId);

      fireEvent.keyDown(input, { key: 'Escape' });

      expect(onChangeSpy).not.toHaveBeenCalled();
    });
  });

  it('`onChange` should be called on submit', () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = render(<SearchBar onChange={onChangeSpy} />);
    const form = getByTestId(barId);
    fireEvent.submit(form);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('`onChange` should be called with the current input value', () => {
    const value = 'bar';
    const onChangeSpy = jest.fn();

    const { getByTestId } = render(<SearchBar onChange={onChangeSpy} />);
    const input = getByTestId(inputId);
    fireEvent.change(input, { target: { value } });
    fireEvent.submit(input);

    expect(onChangeSpy).toHaveBeenCalledWith(value);
  });
});

describe('Clearable Button', () => {
  const clearId = 'SearchBar__clearButton';

  it('should only be visible when there is a value', () => {
    const { getByTestId, queryByTestId } = render(
      <SearchBar defaultValue="" />,
    );
    const input = getByTestId(inputId);

    // Initially hidden since `defaultValue` is empty
    expect(queryByTestId(clearId)).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'foo' } });
    expect(queryByTestId(clearId)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '' } });
    expect(queryByTestId(clearId)).not.toBeInTheDocument();
  });

  it('should clear value on click', () => {
    const { getByTestId } = render(<SearchBar defaultValue="foo" />);
    const input = getByTestId(inputId);
    const clearButton = getByTestId(clearId);

    fireEvent.click(clearButton);

    expect(input.value).toBe('');
  });

  it('click should not trigger `onChange`', () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = render(<SearchBar defaultValue="bar" />);

    fireEvent.click(getByTestId(clearId));

    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('click should return focus to input', () => {
    const { getByTestId } = render(<SearchBar defaultValue="baz" />);
    const input = getByTestId(inputId);
    const clearButton = getByTestId(clearId);

    fireEvent.click(clearButton);

    expect(input).toHaveFocus();
  });

  it("should not be visible if it's not clearable", () => {
    const { queryByTestId } = render(
      <SearchBar clearable={false} defaultValue="foo" />,
    );
    expect(queryByTestId(clearId)).not.toBeInTheDocument();
  });
});

describe('Start Icon', () => {
  const startButton = 'SearchBar__startButton';

  it('should render correctly', () => {
    const { queryByTestId } = render(<SearchBar />);
    expect(queryByTestId(startButton)).toBeInTheDocument();
  });

  it('should call `onChange` on click', () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = render(<SearchBar onChange={onChangeSpy} />);
    const button = getByTestId(startButton);

    fireEvent.click(button);

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });
});

describe('End Icon', () => {
  const endButton = 'SearchBar__endButton';

  it('should render correctly', () => {
    const { queryByTestId } = render(
      <SearchBar endIcon={<SearchBarButton icon="div">foo</SearchBarButton>} />,
    );
    const button = queryByTestId(endButton);
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });
});
