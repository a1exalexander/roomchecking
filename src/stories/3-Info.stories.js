import React, { useState } from 'react';
import {
  Stat as StatElement,
  Badge as BadgeElement,
  Input
} from 'components/common';
import './style.scss';

export default {
  title: 'Info'
};

export const Stat = () => {
  const [value, setValue] = useState(37);
  return (
    <section className='section'>
      <h2 className='title'>Stat</h2>
      <article className='row'>
        <StatElement value={value} label='Hebdo' />
        <StatElement value={value / 11} label='REC' />
        <StatElement value={value * 13.3} label='Governesses' />
        <StatElement value={value / 10.7 || 1} label='Hotels' />
      </article>
      <article className='row'>
        <Input label='Update stat value' value={value} onChange={setValue} />
      </article>
    </section>
  );
};

export const Badge = () => {
  return (
    <section className='section'>
      <h2 className='title'>Badges</h2>
      <article className='row'>
        <BadgeElement>Grey</BadgeElement>
        <BadgeElement color='dark'>Dark</BadgeElement>
        <BadgeElement color='green'>Green</BadgeElement>
        <BadgeElement color='blue'>Blue</BadgeElement>
        <BadgeElement color='red'>Red</BadgeElement>
        <BadgeElement color='yellow'>Yellow</BadgeElement>
        <BadgeElement color='purple'>Purple</BadgeElement>
      </article>
    </section>
  );
};
