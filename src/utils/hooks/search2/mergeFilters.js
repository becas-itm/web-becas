function mergeFilters(defaultValues, initialValues) {
  const isArrayFilter = arrayFilters(defaultValues);

  const filters = {};
  for (const [name, defaultValue] of Object.entries(defaultValues)) {
    const value = initialValues[name];

    if (value || value === '') {
      if (isArrayFilter(name) && !Array.isArray(value)) {
        filters[name] = value === '' ? [] : [value];
      } else {
        filters[name] = value;
      }
    } else {
      filters[name] = defaultValue;
    }
  }

  return filters;
}

function arrayFilters(values = {}) {
  const filters = new Set(
    Object.entries(values)
      .filter(([, value]) => Array.isArray(value))
      .map(([filter]) => filter),
  );

  return name => filters.has(name);
}

export { mergeFilters };
