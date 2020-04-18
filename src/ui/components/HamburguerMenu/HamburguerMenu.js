import React from 'react';

function HamburguerMenu({ isOpen = false, ...restProps }) {
  return (
    isOpen && (
      <nav className="mt-2" data-testid="HamburguerMenu" {...restProps} />
    )
  );
}

export default HamburguerMenu;
