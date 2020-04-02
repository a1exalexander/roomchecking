import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Checkbox as CheckboxElement,
  Input as InputElement
} from 'components/common';
import './style.scss';

export default {
  title: 'Form'
};

export const Checkbox = () => {
  const [value, setValue] = useState(false);
  const onChange = value => {
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
