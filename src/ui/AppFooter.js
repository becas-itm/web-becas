import React from 'react';
import { Link } from 'react-router-dom';

export function AppFooter() {
  return (
    <footer className="py-4 border-t text-sm bg-gray-100">
      <ul className="mx-auto flex justify-center flex-wrap">
        <li>© 2020 ITM</li>
        <li className="text-medium">・</li>
        <li>
          <Link to="/terminos" className="hover:underline">
            Términos
          </Link>
        </li>
        <li className="text-medium">・</li>
        <li>Privacidad</li>
      </ul>
    </footer>
  );
}

export default AppFooter;