import React from 'react';
import { Tune } from 'ui/components/Icon';
import SearchBar, { SearchBarButton } from './index';
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

export const normal = () => <SearchBar onChange={action('onChange')} />;

export const large = () => <SearchBar isLarge onChange={action('onChange')} />;

export const withInitialValue = () => (
  <SearchBar
    isLarge
    onChange={action('onChange')}
    defaultValue="Initial value..."
  />
);

export const withEndIcon = () => (
  <SearchBar
    isLarge
    endIcon={
      <SearchBarButton onClick={action('Click')} icon={Tune}>
        Filter
      </SearchBarButton>
    }
  />
);
