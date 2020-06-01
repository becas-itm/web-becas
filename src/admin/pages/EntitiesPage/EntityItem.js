import React from 'react';
import propTypes from 'prop-types';

import Avatar from 'ui/Avatar';
import { Link } from 'ui/Icon';
import Button, { COLOR } from 'ui/Button';

export function EntityItem({ name, website, onEdit, ...restProps }) {
  return (
    <div {...restProps} className="flex bg-white rounded shadow pl-6 pr-8 py-4">
      <div>
        <Avatar name={name} data-testid="EntityItem__Avatar" />
      </div>

      <div className="flex-1 ml-5">
        <div className="text-lg">{name}</div>

        <div className="my-2">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline focus:underline cursor-pointer"
          >
            <Link className="mr-2 text-disabled" />
            Visitar página
          </a>
        </div>

        <div>
          <Button onClick={onEdit} color={COLOR.secondary}>
            Editar
          </Button>
        </div>
      </div>
    </div>
  );
}

EntityItem.propTypes = {
  name: propTypes.string.isRequired,
  website: propTypes.string.isRequired,
  onEdit: propTypes.func,
};
