import { useState } from 'react';

export function useHamburger(initialOpen = false) {
  const [isOpen, setOpen] = useState(initialOpen);
  const toggleMenu = () => setOpen(opened => !opened);
  return {
    isOpen,
    getToggleButtonProps: () => ({ onClick: toggleMenu }),
  };
}
