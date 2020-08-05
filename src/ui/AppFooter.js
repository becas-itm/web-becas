import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { MdMailOutline } from 'react-icons/md';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';

export function AppFooter() {
  return (
    <footer className="py-10 border-t bg-white" data-testid="AppFooter">
      <div className="w-full max-w-xl lg:max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap -mb-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8">
            <div
              className="font-semibold text-xl mb-6 pl-8"
              style={{ letterSpacing: 6 }}
              aria-label="Dirección de Cooperación y Relaciones Internacionales"
            >
              DCRI
            </div>
            <div className="flex">
              <GoLocation
                size={20}
                className="text-disabled flex-shrink-0 mr-3 mt-1"
              />
              <address>
                Calle 73 # 76a - 354 <br /> Medellín, Antioquia
              </address>
            </div>
            <div className="flex mt-5">
              <FiPhone
                size={20}
                className="text-disabled flex-shrink-0 mr-3 mt-1"
              />
              <a href="tel:4405100">(4) 4405100</a>
            </div>
            <div className="flex mt-5">
              <MdMailOutline
                size={20}
                className="text-disabled flex-shrink-0 mr-3 mt-1"
              />
              <a
                href="mailto:dcri@itm.edu.co"
                className="text-primary hover:underline focus:underline"
              >
                dcri@itm.edu.co
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 pl-8">
            <div className="font-semibold text-sm uppercase tracking-wider mb-5">
              Enlaces
            </div>
            <div className="text-sm uppercase">
              <Link className="block hover:underline focus:underline" to="/">
                Inicio
              </Link>
              <Link
                className="block mt-3 hover:underline focus:underline"
                to="/buscar"
              >
                Buscar becas
              </Link>
              <Link
                className="block mt-3 hover:underline focus:underline"
                to="/"
              >
                Compartir una beca
              </Link>
              <Link
                className="block mt-3 hover:underline focus:underline"
                to="/terminos"
              >
                Términos y condiciones
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 pl-8">
            <div className="font-semibold text-sm uppercase tracking-wider mb-5">
              Síguenos
            </div>
            <div className="flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/itminternacional"
                className="flex flex-col items-center hover:underline focus:underline"
              >
                <AiFillFacebook size={36} className="text-disabled" />
                <div className="text-xs uppercase mt-1">Facebook</div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/becas-itm"
                className="flex flex-col items-center hover:underline focus:underline ml-8"
              >
                <AiFillGithub size={36} className="text-disabled" />
                <div className="text-xs uppercase mt-1">GitHub</div>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-disabled mt-4">© 2020 ITM</div>
      </div>
    </footer>
  );
}

export default AppFooter;
