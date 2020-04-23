import React from 'react';
import { Formik, Form, FastField as BaseFastField } from 'formik';
import Button, { COLOR } from 'ui/components/Button';
import AdminTemplate from 'ui/templates/AdminTemplate';
import {
  NameEditable,
  DescriptionEditable,
  DeadlineEditable,
  FundingTypeEditable,
  CountryEditable,
} from 'ui/components/ScholarshipFields';

export default function CreatePendingScholarshipPage() {
  const handleSubmit = values => {
    console.log('submit', values);
  };

  return (
    <AdminTemplate>
      <main
        style={{ maxWidth: 840 }}
        className="max-w-screen-md mx-auto p-4 bg-white shadow md:rounded  sm:py-10 md:py-16 my-8"
      >
        <div className="relative max-w-xl mx-auto">
          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              name: '',
              description: '',
              deadline: '',
              fundingType: '*',
              country: '*',
              entity: '',
            }}
          >
            <Form noValidate>
              <h1 className="text-xl sm:text-2xl font-semibold mb-4">
                Nueva convocatoria
              </h1>

              <div className="mb-2">
                <BaseFastField
                  component={({ field, form }) => (
                    <NameEditable
                      value={field.value.name}
                      onChange={item => form.setFieldValue('name', item)}
                    ></NameEditable>
                  )}
                />
              </div>

              <BaseFastField
                component={({ field, form }) => (
                  <DescriptionEditable
                    value={field.value.description}
                    rows={6}
                    onChange={item => form.setFieldValue('description', item)}
                  ></DescriptionEditable>
                )}
              />

              <BaseFastField
                component={({ field, form }) => (
                  <DeadlineEditable
                    value={field.value.deadline}
                    onChange={item => form.setFieldValue('deadline', item)}
                  ></DeadlineEditable>
                )}
              />

              <BaseFastField
                component={({ field, form }) => (
                  <FundingTypeEditable
                    value={field.value.fundingType}
                    onChange={item => form.setFieldValue('fundingType', item)}
                  ></FundingTypeEditable>
                )}
              />

              <BaseFastField
                component={({ field, form }) => (
                  <CountryEditable
                    value={field.value.country}
                    onChange={item => form.setFieldValue('country', item)}
                  ></CountryEditable>
                )}
              />

              <BaseFastField
                component={({ field, form }) => (
                  <CountryEditable
                    value={field.value.country}
                    onChange={item => form.setFieldValue('country', item)}
                  ></CountryEditable>
                )}
              />
              <div className="flex justify-end mt-6">
                <Button color={COLOR.secondary}>Cancelar</Button>
                <Button type="submit" className="ml-3">
                  Guardar
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </main>
    </AdminTemplate>
  );
}
