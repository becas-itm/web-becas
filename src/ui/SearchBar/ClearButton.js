import React from 'react';
import { MdCancel } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export function ClearButton({ onClick, isVisible = false, isLarge = false }) {
  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.3 }}
          transition={{ duration: '0.075' }}
        >
          <button
            onClick={handleClick}
            style={{
              width: isLarge ? 60 : 48,
              height: isLarge ? 60 : 48,
            }}
            data-testid="SearchBar__clearButton"
            className="flex items-center justify-center flex-shrink-0 focus:outline-none text-disabled hover:text-medium focus:text-medium  active:text-disabled"
          >
            <MdCancel size={isLarge ? 28 : 24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
