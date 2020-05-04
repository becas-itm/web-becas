import React from 'react';
import NotFoundGhost from './index';

export default {
  title: 'Not Found Ghost',
  component: NotFoundGhost,
};

export const normal = () => <NotFoundGhost title="No encontrado" />;

export const withDescription = () => (
  <NotFoundGhost title="Not found" description="There's nothing to see here" />
);

export const withAction = () => (
  <NotFoundGhost title="Oops!" description="Something went wrong">
    <button className="text-primary underline">Try again</button>
  </NotFoundGhost>
);
