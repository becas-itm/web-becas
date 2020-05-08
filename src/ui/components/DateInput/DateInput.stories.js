import React from 'react';
import DateInput from './index';

export default {
  title: 'DateInput',
  component: DateInput,
};

export const normal = () => <DateInput />;

export const NativeValueFormat = () => <DateInput defaultValue="2020-01-01" />;

export const DateValueObject = () => (
  <DateInput defaultValue={new Date(2020, 0, 1)} />
);

export const ControlledInput = () => {
  const [date, setDate] = React.useState('2020-01-01');

  const handleChange = event => setDate(event.target.value);
  const handleReset = () => setDate('2020-01-01');

  React.useEffect(() => console.log(date), [date]);

  return (
    <>
      <button onClick={handleReset}>RESET</button>
      <DateInput value={date} onChange={handleChange} />
    </>
  );
};
