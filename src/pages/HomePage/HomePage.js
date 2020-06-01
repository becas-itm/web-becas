import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ArrowRightAlt } from 'ui/components/Icon';
import SearchBar, { SearchBarButton } from 'ui/components/SearchBar';

import { HomeHeader } from './HomeHeader';
import { ReactComponent as ImgHero } from './imgResearching.svg';

export default function HomePage() {
  const history = useHistory();

  const handleChange = term => {
    history.push(`/buscar?term=${term}`, { isSearching: true });
  };

  return (
    <div>
      <div className="h-1 w-full bg-primary" />
      <div className="p-4 lg:pt-10 pb-0 max-w-screen-xl mx-auto">
        <HomeHeader />

        <div className="max-w-md mx-auto mt-6 lg:mt-12 lg:max-w-none flex flex-wrap justify-around">
          <main className="mb-4 max-w-md">
            <p className="font-mont font-semibold text-4xl sm:text-5xl leading-none mb-8">
              Encuentra nuevas oportunidades en el exterior
            </p>

            <SearchBar
              isLarge
              clearable={false}
              placeholder="Busca tu beca"
              onChange={handleChange}
              endIcon={
                <SearchBarButton icon={ArrowRightAlt} type="submit">
                  Buscar
                </SearchBarButton>
              }
            />

            <div className="mt-8">
              ¿Conoces alguna beca?{' '}
              <Link to="#" className="underline text-primary">
                ¡Compártela!
              </Link>
            </div>
          </main>

          <div className="w-full max-w-md">
            <ImgHero aria-hidden className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
