import React from 'react';
import { action } from '@storybook/addon-actions';

import { EntityItem } from './EntityItem';
import { EntityForm } from './EntityForm';
import { EntitiesPage } from './EntitiesPage';
import { EmptyEntitiesState } from './EmptyEntitiesState';

export default {
  title: 'Admin / EntitiesPage',
  component: EntityItem,
};

export const emptyPage = () => <EntitiesPage />;

export const withEntities = () => (
  <EntitiesPage
    entities={[
      { name: 'foo', website: 'http://foo.com', code: 'foo' },
      { name: 'bar', website: 'http://bar.com', code: 'bar' },
    ]}
  />
);

export const entityItem = () => (
  <EntityItem
    name="German Service"
    website="https://www.daad.de/de/"
    data-testid="EntityItem"
    onEdit={action('onEdit')}
  />
);

export const entityForm = () => <EntityForm />;

export const entityFormData = () => (
  <EntityForm
    onSubmit={action('onSubmit')}
    entity={{ name: 'john', website: 'http://example.com' }}
  />
);
entityFormData.story = {
  name: 'Entity Form (initial data)',
};

export const emptyState = () => (
  <EmptyEntitiesState onNewClick={action('onNewClick')} />
);
