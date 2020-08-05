import React from 'react';
import { SearchBar } from 'ui/SearchBar';
import { Link, useHistory } from 'react-router-dom';

import { ReactComponent as ImgHero } from './imgResearching.svg';

export function HeroSection() {
  const history = useHistory();

  const handleSearchSubmit = term => {
    history.push(`/buscar?term=${term}`, { isSearching: true });
  };

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <h1
          className="font-mont font-semibold max-w-sm text-5xl tracking-tight"
          style={{ lineHeight: '3rem', fontSize: '2.75rem', color: '#102C60' }}
          data-testid="HomePage__heroTitle"
        >
          Encuentra nuevas <span className="text-primary">oportunidades</span>{' '}
          en el exterior
        </h1>

        <div className="mt-8 lg:mt-12 w-full lg:max-w-sm">
          <SearchBar
            isLarge
            onSubmit={handleSearchSubmit}
            placeholder="Busca tu beca"
          />
        </div>

        <p className="mt-8 lg:mt-12">
          ¿Conoces alguna beca?{' '}
          <Link to="#" className="text-primary hover:underline focus:underline">
            ¡Compártela!
          </Link>
        </p>
      </div>
      <div className="mt-8 lg:mt-0 flex-1">
        <div className="flex items-center justify-center">
          <ImgHero
            aria-hidden
            className="w-full h-full"
            style={{ maxWidth: 468 }}
          />
        </div>
      </div>
    </section>
  );
}
