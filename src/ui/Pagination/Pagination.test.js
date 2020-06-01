import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

const renderPagination = ({
  page = 1,
  totalPages = 2,
  onPage = () => {},
} = {}) =>
  render(<Pagination page={page} totalPages={totalPages} onPage={onPage} />);

test('renders correctly', () => {
  const { queryByTestId } = renderPagination();
  expect(queryByTestId('Pagination')).toBeInTheDocument();
});

describe('forward buttons', () => {
  const nextButtonId = 'Pagination__nextButton';
  const lastButtonId = 'Pagination__lastButton';

  it('should be shown if not last page', () => {
    const { queryByTestId } = renderPagination({ page: 1, totalPages: 2 });
    expect(queryByTestId(nextButtonId)).toBeInTheDocument();
    expect(queryByTestId(lastButtonId)).toBeInTheDocument();
  });

  it('should be hidden if total pages are 1', () => {
    const page = 1;
    const { queryByTestId } = renderPagination({ page, totalPages: page });
    expect(queryByTestId(nextButtonId)).not.toBeInTheDocument();
    expect(queryByTestId(lastButtonId)).not.toBeInTheDocument();
  });

  test('next button click should call `onPage` with the last page', () => {
    const nextPage = 2;

    const onPage = jest.fn();
    const { getByTestId } = renderPagination({
      onPage,
      page: 1,
      totalPages: 2,
    });
    fireEvent.click(getByTestId(nextButtonId));

    expect(onPage).toHaveBeenCalledWith(nextPage);
  });

  test('last button click should call `onPage` with the last page', () => {
    const lastPage = 3;

    const onPage = jest.fn();
    const { getByTestId } = renderPagination({
      onPage,
      page: 1,
      totalPages: lastPage,
    });
    fireEvent.click(getByTestId(lastButtonId));

    expect(onPage).toHaveBeenCalledWith(lastPage);
  });
});

describe('backward buttons', () => {
  const prevButtonId = 'Pagination__prevButton';
  const firstButtonId = 'Pagination__firstButton';

  it('should be shown if not first page', () => {
    const { queryByTestId } = renderPagination({ page: 2, totalPages: 2 });
    expect(queryByTestId(prevButtonId)).toBeInTheDocument();
    expect(queryByTestId(firstButtonId)).toBeInTheDocument();
  });

  it('should be hidden if total pages are 1', () => {
    const page = 1;
    const { queryByTestId } = renderPagination({ page, totalPages: page });
    expect(queryByTestId(prevButtonId)).not.toBeInTheDocument();
    expect(queryByTestId(firstButtonId)).not.toBeInTheDocument();
  });

  test('prev button click should call `onPage` with the previous page', () => {
    const previousPage = 1;

    const onPage = jest.fn();
    const { getByTestId } = renderPagination({
      onPage,
      page: 2,
      totalPages: 2,
    });
    fireEvent.click(getByTestId(prevButtonId));

    expect(onPage).toHaveBeenCalledWith(previousPage);
  });

  test('first button click should call `onPage` with the first page', () => {
    const firstPage = 1;

    const onPage = jest.fn();
    const { getByTestId } = renderPagination({
      onPage,
      page: 3,
      totalPages: 3,
    });
    fireEvent.click(getByTestId(firstButtonId));

    expect(onPage).toHaveBeenCalledWith(firstPage);
  });
});

describe('manual button', () => {
  it('should always show current page', () => {
    const page = 1;
    const { getByText } = renderPagination({ page });
    expect(getByText(String(page))).toBeInTheDocument();

    // this label is present only for mobile devices
    expect(getByText(`Página ${page}`)).toBeInTheDocument();
  });

  test('should only show 5 buttons at most', () => {
    const { container } = renderPagination({ page: 50, totalPages: 99 });
    const buttons = container.querySelectorAll('.Pagination__buttons button');
    expect(buttons).toHaveLength(5);
  });
});
