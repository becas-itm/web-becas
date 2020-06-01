import React from 'react';

function HamburgerMenu({ isOpen = false, ...restProps }) {
  return (
    isOpen && (
      <nav className="mt-2" data-testid="HamburgerMenu" {...restProps} />
    )
  );
}

export default HamburgerMenu;
