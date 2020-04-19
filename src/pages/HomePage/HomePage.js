import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowRightAlt } from 'ui/components/Icon';
import AppHeader from 'ui/components/AppHeader/AppHeader';
import SearchBar, { SearchBarButton } from 'ui/components/SearchBar';

import { ReactComponent as ImgHero } from './imgResearching.svg';

export default function HomePage() {
  const navigate = useNavigate();

  const handleChange = term => {
    navigate(`/buscar?term=${term}`, { state: { isSearching: true } });
  };

  return (
    <div>
      <div className="h-1 w-full bg-primary" />
      <div className="p-4 lg:pt-10 pb-0 max-w-screen-xl mx-auto">
        <AppHeader />

        <div className="max-w-md mx-auto mt-6 lg:mt-12 lg:max-w-none flex flex-wrap justify-around">
          <main className="mb-4 max-w-md">
            <p className="font-mont font-semibold text-4xl sm:text-5xl leading-none mb-6">
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

            <div className="mt-6">
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
