import React from 'react';
import { Event } from 'ui/components/Icon';
import NavigationItem from './NavigationItem';

const navItems = [
  {
    to: '#',
    icon: Event,
    title: 'Usuario',
    description: 'Curabitur eu est et leo feugiat ',
  },
  {
    to: '#',
    icon: Event,
    title: 'Usuario',
    description: 'Curabitur eu est et leo feugiat ',
  },
  {
    to: '#',
    icon: Event,
    title: 'Usuario',
    description: 'Curabitur eu est et leo feugiat ',
  },
  {
    to: '#',
    icon: Event,
    title: 'Usuario',
    description: 'Curabitur eu est et leo feugiat ',
  },
  {
    to: '#',
    icon: Event,
    title: 'Usuario',
    description: 'Curabitur eu est et leo feugiat ',
  },
  {
    to: '#',
    icon: Event,
    title: 'Usuario',
    description: 'Curabitur eu est et leo feugiat ',
  },
];

export default function HomeNavigation() {
  return (
    <div className="flex flex-wrap justify-around">
      {navItems.map((item, index) => (
        <div className="sm:mb-8" key={index}>
          <NavigationItem {...item} />
        </div>
      ))}
    </div>
  );
}
