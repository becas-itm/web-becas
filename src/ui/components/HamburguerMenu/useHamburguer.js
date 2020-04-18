import { useState } from 'react';

export function useHamburguer(initialOpen = false) {
  const [isOpen, setOpen] = useState(initialOpen);
  const toggleMenu = () => setOpen(opened => !opened);
  return {
    isOpen,
    getToggleButtonProps: () => ({ onClick: toggleMenu }),
  };
}
