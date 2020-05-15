import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationItem({ to, icon: Icon, title, description }) {
  return (
    <Link
      to={to}
      className="admin-home-item border-2 border-transparent hover:border-blue-500 focus:border-blue-500 focus:outline-none flex sm:flex-col sm:items-center rounded-sm p-4 sm:py-6 transition-colors duration-100"
    >
      <div className="text-blue-500 w-10 h-10 sm:w-16 sm:h-16 mr-4 sm:mr-0 sm:mb-2 flex-shrink-0">
        <Icon auto />
      </div>
      <div className="sm:text-center">
        <p className="text-lg sm:text-xl sm:mb-1">{title}</p>
        <p className="text-medium">{description}</p>
      </div>
    </Link>
  );
}
