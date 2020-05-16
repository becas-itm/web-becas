import React from 'react';

import { Translate } from 'ui/components/Icon';
import CountryFlag from 'ui/components/CountryFlag';
import { LanguageListbox, CountryCombobox } from 'ui/components/Scholarship';

import { FieldMissingWarning } from '../FieldMissingWarning';

export function LocalizationSection({ country, fieldsDisabled = false }) {
  return (
    <section className="flex flex-wrap pt-6 px-4 lg:px-0 border-t mt-8">
      <div className="mb-6 md:mb-0 md:flex-1">
        <h2 className="text-active font-semibold">Localización</h2>
        <p className="text-sm text-medium mt-1 md:pr-10">
          Información acerca de la localidad de la convocatoria y el idioma en
          que se realizará.
        </p>
      </div>

      <div className="w-full md:max-w-lg">
        <div className="flex items-start">
          <CountryFlag
            code={country?.code}
            style={{ width: 24, height: 24 }}
            className="shadow-outline rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <div className="mb-3 flex justify-between">
              <label className="text-sm text-active">País</label>
              <FieldMissingWarning name="country" />
            </div>
            <CountryCombobox
              name="country"
              disabled={true}
              data-testid="country"
            />
          </div>
        </div>

        <div className="mt-6 flex items-start">
          <Translate className="text-disabled mr-3" />
          <div className="flex-1">
            <div className="mb-3 flex justify-between">
              <label className="text-sm text-active">Idioma</label>
              <FieldMissingWarning name="language" />
            </div>
            <LanguageListbox
              name="language"
              disabled={fieldsDisabled}
              data-testid="language"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
