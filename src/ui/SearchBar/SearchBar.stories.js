import React from 'react';
import { SearchBar } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Search Bar',
  component: SearchBar,
  decorators: [
    storyFn => (
      <div className="h-screen flex items-center justify-center p-4">
        {storyFn()}
      </div>
    ),
  ],
};

export const normal = () => (
  <SearchBar onSubmit={action('onSubmit')} placeholder="Search" />
);

export const withDefaultValue = () => (
  <SearchBar onSubmit={action('onSubmit')} defaultValue="Initial value..." />
);

export const large = () => (
  <SearchBar isLarge onSubmit={action('onSubmit')} placeholder="Search" />
);
