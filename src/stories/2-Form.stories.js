import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Checkbox as CheckboxElement,
  Input as InputElement,
  Select as SelectElement,
} from 'components/common';
import './style.scss';

export default {
  title: 'Form',
};

export const Checkbox = () => {
  const [value, setValue] = useState(false);
  const onChange = (value) => {
    setValue(value);
    return action(`Clicked (change value to "${value}")`)();
  };
  return (
    <section className='section'>
      <h2 className='title'>Checkbox</h2>
      <article className='row'>
        <CheckboxElement checked={value} onChange={onChange} />
        <pre>[ {String(value)} ]</pre>
      </article>
    </section>
  );
};

export const Input = () => {
  return (
    <section className='section'>
      <h2 className='title'>Input</h2>
      <article className='row'>
        <InputElement label='Default' />
        <InputElement disabled label='Disabled' />
        <InputElement label='Error' status={'error'} />
        <InputElement label='Success' status={'success'} />
      </article>
    </section>
  );
};

const data = [...new Array(10).keys()].map((item, idx) => ({
  id: idx + 1,
  value: `Option ${idx + 1}`,
}));

export const Select = () => {
  const [value, setValue] = useState();

  return (
    <section className='section'>
      <h2 className='title'>Select</h2>
      <article className='row'>
        <SelectElement label='Select' onChange={setValue} data={data} value={value} />
      </article>
    </section>
  );
};
