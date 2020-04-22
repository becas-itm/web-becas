import React from 'react';
import propTypes from 'prop-types';
import { Warning } from 'ui/components/Icon';

const MissingIcon = props => (
  <Warning {...props} style={{ color: '#FAC809' }} />
);

export function Field({ icon, name, children, isMissing }) {
  if (isMissing) {
    icon = <MissingIcon />;
  }

  return (
    <div className="flex">
      {icon && <div className="text-disabled mr-2 flex-shrink-0">{icon}</div>}
      <div className="w-full">
        {name && <div className="text-sm text-medium">{name}</div>}
        {isMissing ? <span className="italic">Desconocido</span> : children}
      </div>
    </div>
  );
}

Field.defaultProps = { isMissing: false };

Field.propTypes = {
  icon: propTypes.element,
  name: propTypes.string,
  children: propTypes.node,
  isMissing: propTypes.bool,
};
