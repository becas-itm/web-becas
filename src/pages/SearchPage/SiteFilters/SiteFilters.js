import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import pick from 'utils/pick';
import { checkboxGroup } from 'utils/forms';

import { Checkbox } from 'ui/Checkbox';
import Button, { COLOR } from 'ui/Button';
import { ComboboxInput, ComboboxPopover } from 'ui/Combobox';
import Combobox, { CountryComboboxMenu } from 'ui/CountryCombobox';

import { useSearch } from '../SearchContext';

import LanguageFilter from './LanguageFilter';

const DEFAULT_FILTERS = Object.freeze({
  country: '',
  language: '',
  fundingType: ['COMPLETE', 'PARTIAL'],
  academicLevel: ['UNDERGRADUATE', 'POSTGRADUATE', 'OTHERS'],
});

function SiteFilters({ onSubmit, onReset }) {
  const search = useSearch();

  const form = useFormik({
    onSubmit: values => {
      search.setFilters(values);
      onSubmit && onSubmit();
    },
    enableReinitialize: true,
    initialValues: pick(search.state, [
      'country',
      'language',
      'fundingType',
      'academicLevel',
    ]),
  });

  const academicLevelProps = checkboxGroup('academicLevel', form);
  const fundingTypeProps = checkboxGroup('fundingType', form);

  const handleReset = event => {
    event.preventDefault();
    form.setValues(DEFAULT_FILTERS);
    search.reset(DEFAULT_FILTERS);
    onReset && onReset();
  };

  return (
    <form onSubmit={form.handleSubmit} onReset={handleReset} id="filters">
      <h4 className="text-sm font-semibold color-gray-500 uppercase">
        Tipo de beca
      </h4>
      <div className="flex flex-col mb-2">
        <Checkbox
          {...academicLevelProps('UNDERGRADUATE')}
          className="p-3 flex-grow"
          data-testid="academicLevel.undergraduate"
        >
          Pregrado
        </Checkbox>
        <Checkbox
          {...academicLevelProps('POSTGRADUATE')}
          className="p-3 flex-grow"
          data-testid="academicLevel.postgraduate"
        >
          Posgrado
        </Checkbox>
        <Checkbox
          {...academicLevelProps('OTHERS')}
          className="p-3 flex-grow"
          data-testid="academicLevel.others"
        >
          Otros
        </Checkbox>
      </div>

      <h4 className="text-sm font-semibold color-gray-500 uppercase">
        Tipo de financiamiento
      </h4>
      <div className="flex flex-wrap mb-2">
        <Checkbox
          {...fundingTypeProps('COMPLETE')}
          className="p-3 flex-grow"
          data-testid="fundingType.complete"
        >
          Total
        </Checkbox>
        <Checkbox
          {...fundingTypeProps('PARTIAL')}
          className="p-3 flex-grow"
          data-testid="fundingType.partial"
        >
          Parcial
        </Checkbox>
      </div>

      <label
        id="filter-language"
        className="text-sm font-semibold color-gray-500 uppercase pb-1"
      >
        Idioma
      </label>
      <div className="flex flex-wrap mb-4">
        <LanguageFilter
          value={form.values.language}
          onChange={language => form.setFieldValue('language', language)}
        />
      </div>

      <h4 className="text-sm font-semibold color-gray-500 uppercase pb-1">
        País
      </h4>
      <Combobox
        inputValue={form.values.country}
        onSelect={selected =>
          form.setFieldValue('country', selected?.name || '')
        }
        onInputValueChange={value => form.setFieldValue('country', value)}
      >
        <ComboboxInput placeholder="Todos" inputClass="placeholder-active" />
        <ComboboxPopover>
          <CountryComboboxMenu />
        </ComboboxPopover>
      </Combobox>

      <div className="mt-8">
        <Button wide type="submit">
          Listo
        </Button>
        <Button color={COLOR.secondary} wide type="reset" className="mt-3">
          Restablecer
        </Button>
      </div>
    </form>
  );
}

SiteFilters.propTypes = {
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

export { DEFAULT_FILTERS };

export default SiteFilters;
