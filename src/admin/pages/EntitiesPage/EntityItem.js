import React from 'react';
import propTypes from 'prop-types';
import { MdLanguage } from 'react-icons/md';

import Avatar from 'ui/Avatar';
import Button, { COLOR } from 'ui/Button';

export function EntityItem({ name, website, onEdit, ...restProps }) {
  return (
    <article
      {...restProps}
      className="flex bg-white rounded-sm pl-6 pr-8 py-5"
      style={{
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.12)',
      }}
    >
      <div>
        <Avatar name={name} data-testid="EntityItem__Avatar" />
      </div>

      <div className="flex-1 ml-5">
        <h1 className="text-lg leading-none">{name}</h1>

        <div className="mt-3">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline focus:underline cursor-pointer"
          >
            <MdLanguage className="mr-2 text-disabled" size={24} />
            Visitar página
          </a>
        </div>

        <footer className="mt-3">
          <Button onClick={onEdit} color={COLOR.secondary}>
            Editar
          </Button>
        </footer>
      </div>
    </article>
  );
}

EntityItem.propTypes = {
  name: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  onEdit: propTypes.func,
};
