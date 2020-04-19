import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Pagination from './index';

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [
    withKnobs,
    // storyFn => (
    //   <div className="h-screen flex items-center justify-center p-4">
    //     {storyFn()}
    //   </div>
    // ),
  ],
};

export const Full = () => {
  const [page, setPage] = React.useState(3);
  return (
    <Pagination
      page={page}
      totalPages={number('Total pages', 9)}
      onPage={setPage}
    />
  );
};

export const knobs = () => (
  <Pagination
    page={number('Current page', 3)}
    totalPages={number('Total pages', 9)}
    onPage={action('onPage')}
  />
);
