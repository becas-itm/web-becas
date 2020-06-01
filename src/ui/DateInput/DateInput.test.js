import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DateInput from './index';

const renderInput = (props = {}) => {
  const { ...queries } = render(<DateInput {...props} />);
  return {
    ...queries,
    input: queries.queryByTestId('DateInput__input'),
    placeholder: queries.queryByTestId('DateInput__placeholder'),
  };
};

test('renders correctly', () => {
  const { queryByTestId } = renderInput();
  expect(queryByTestId('DateInput')).toBeInTheDocument();
});

test('input type is `date`', () => {
  const { input } = renderInput();
  expect(input).toHaveProperty('type', 'date');
});

test('ref is forwarded to input element', () => {
  const ref = React.createRef();
  const { input } = renderInput({ ref });
  expect(ref.current).toBe(input);
});

describe('`defaultValue` prop', () => {
  it('should accept native value format', () => {
    const defaultValue = '2020-01-01';
    const { input } = renderInput({ defaultValue });
    expect(input).toHaveValue(defaultValue);
  });

  it('should accept a ISO string date', () => {
    const date = '2020-01-01';
    const isoDate = `${date}T00:00:00.000Z`;
    const { input } = renderInput({ defaultValue: isoDate });
    expect(input).toHaveValue(date);
  });

  it('should accept a Date object', () => {
    const date = new Date(2020, 0, 1);
    const { input } = renderInput({ defaultValue: date });
    expect(input).toHaveValue('2020-01-01');
  });
});

describe('`value` prop', () => {
  it('should accept native value format', () => {
    const value = '2020-01-01';
    const { input } = renderInput({ value });
    expect(input).toHaveValue(value);
  });

  it('should accept a ISO string date', () => {
    const date = '2020-01-01';
    const isoDate = `${date}T00:00:00.000Z`;
    const { input } = renderInput({ value: isoDate });
    expect(input).toHaveValue(date);
  });

  it('should accept a Date object', () => {
    const date = new Date(2020, 0, 1);
    const { input } = renderInput({ value: date });
    expect(input).toHaveValue('2020-01-01');
  });
});

describe('placeholder', () => {
  it('should be shown when unfocused', () => {
    const { placeholder } = renderInput();
    expect(placeholder).toBeInTheDocument();
  });

  it('`placeholder` prop', () => {
    const { placeholder } = renderInput({ placeholder: 'bar' });
    expect(placeholder).toHaveTextContent('bar');
  });

  it('default value should be `Seleccionar`', () => {
    const { placeholder } = renderInput();
    expect(placeholder).toHaveTextContent('Seleccionar');
  });

  it('should be hidden when focused', () => {
    const ref = React.createRef();
    const { placeholder } = renderInput({ ref });
    ref.current.focus();
    expect(placeholder).not.toBeInTheDocument();
  });
});

describe('placeholder format', () => {
  it('should show current value as placeholder', () => {
    const value = '2020-01-01';
    const { placeholder } = renderInput({ value });
    expect(placeholder).toHaveTextContent('1 de enero de 2020');
  });

  it('default value should be formatted as well', () => {
    const defaultValue = '2019-12-31';
    const { placeholder } = renderInput({ defaultValue });
    expect(placeholder).toHaveTextContent('31 de diciembre de 2019');
  });
});

test('className prop is merged', () => {
  const className = 'test';
  const { getByTestId } = renderInput({ className });
  expect(getByTestId('DateInput')).toHaveClass('test');
});

test('onFocus prop is passed', () => {
  const focusSpy = jest.fn();
  const { input } = renderInput({ onFocus: focusSpy });
  fireEvent.focus(input);
  expect(focusSpy).toHaveBeenCalledTimes(1);
});

test('onBlur prop is passed', () => {
  const blurSpy = jest.fn();
  const { input } = renderInput({ onBlur: blurSpy });
  fireEvent.blur(input);
  expect(blurSpy).toHaveBeenCalledTimes(1);
});

test('controlled input', () => {
  const value = '2020-01-01';
  const onChange = jest.fn();
  const { input } = renderInput({ value, onChange });
  fireEvent.change(input, { target: { value: '2020-12-31' } });
  expect(onChange).toHaveBeenCalledTimes(1);
});
