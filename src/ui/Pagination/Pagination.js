import React from 'react';
import propTypes from 'prop-types';

import { LastPage, FirstPage, ChevronLeft, ChevronRight } from 'ui/Icon';

import IconButton from 'ui/IconButton';

import Button from './PaginationButton';
import { calcControlButtons } from './calcControlButtons';
import './Pagination.css';

function Pagination({ onPage, page, totalPages }) {
  const buttons = calcControlButtons({ current: page, total: totalPages });

  return (
    <div className="flex items-center w-full" data-testid="Pagination">
      <div className="w-10 mr-2">
        {page > 1 && totalPages > 1 && (
          <IconButton
            onClick={() => onPage(1)}
            icon={FirstPage}
            data-testid="Pagination__firstButton"
          >
            Primera página
          </IconButton>
        )}
      </div>
      <div className="w-10">
        {page > 1 && totalPages > 1 && (
          <IconButton
            onClick={() => onPage(page - 1)}
            icon={ChevronLeft}
            data-testid="Pagination__prevButton"
          >
            Página anterior
          </IconButton>
        )}
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="Pagination__buttons hidden">
          {buttons.map(i => (
            <Button onClick={() => onPage(i)} key={i} selected={i === page}>
              {i}
            </Button>
          ))}
        </div>
        <div className="Pagination__currentPage px-2 text-center">
          {`Página ${page}`}
        </div>
      </div>

      <div className="w-10 mr-2">
        {page < totalPages && (
          <IconButton
            onClick={() => onPage(page + 1)}
            icon={ChevronRight}
            data-testid="Pagination__nextButton"
          >
            Página siguiente
          </IconButton>
        )}
      </div>
      <div className="w-10">
        {page < totalPages && (
          <IconButton
            onClick={() => onPage(totalPages)}
            icon={LastPage}
            data-testid="Pagination__lastButton"
          >
            Última página
          </IconButton>
        )}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  page: propTypes.number.isRequired,
  onPage: propTypes.func.isRequired,
  totalPages: propTypes.number.isRequired,
};

export default Pagination;
