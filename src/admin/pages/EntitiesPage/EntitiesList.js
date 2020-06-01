import React from 'react';

import { Add } from 'ui/Icon';
import Button from 'ui/Button';

import { EntityItem } from './EntityItem';
import { EmptyEntitiesState } from './EmptyEntitiesState';

export function EntitiesList({ entities = [], onNew, onEdit }) {
  if (entities.length === 0) {
    return (
      <div className="flex justify-center mx-4 mt-10 sm:mt-32">
        <EmptyEntitiesState onNewClick={onNew} />
      </div>
    );
  }

  return (
    <div data-testid="EntitiesList">
      <header className="mb-4 mt-6 flex flex-wrap items-baseline justify-between">
        <h1 className="text-xl font-semibold">Entidades</h1>
        <Button
          onClick={onNew}
          outline
          data-testid="EntitiesList__createButton"
        >
          <div className="flex flex-wrap items-center">
            Nueva <Add className="ml-2" />
          </div>
        </Button>
      </header>

      <div className="flex flex-wrap justify-between lg:justify-around xl:justify-between mt-8">
        {entities.map(entity => (
          <div key={entity.code} className="mb-6 w-full lg:max-w-xs">
            <EntityItem
              name={entity.name}
              website={entity.website}
              onEdit={() => onEdit(entity)}
              data-testid="EntityItem"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
