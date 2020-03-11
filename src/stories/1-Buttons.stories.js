import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Subtle } from 'components/common';
import './style.scss';

export default {
  title: 'Buttons'
};

const Icon = ({ className }) => (
  <span className={className} role='img' aria-label='icon'>
    ⚡️
  </span>
);

export const Primary = () => (
  <section className='section'>
    <h2 className='title'>Primary Button</h2>
    <article className='row'>
      <Button onClick={action('clicked')}>Primary</Button>
      <Button onClick={action('clicked')} disabled>
        Disabled
      </Button>
      <Button onClick={action('clicked')} loading>
        Loading
      </Button>
      <Button Icon={Icon} onClick={action('clicked')}>
        Primary
      </Button>
      <Button onClick={action('clicked')} extra>Primary</Button>
    </article>
  </section>
);

export const Secondary = () => (
  <section className='section'>
    <h2 className='title'>Secondary Button</h2>
    <article className='row'>
      <Button type='secondary' onClick={action('clicked')}>
        Secondary
      </Button>
      <Button type='secondary' onClick={action('clicked')} disabled>
        Disabled
      </Button>
      <Button type='secondary' onClick={action('clicked')} loading>
        Loading
      </Button>
      <Button Icon={Icon}type='secondary' onClick={action('clicked')}>
        Secondary
      </Button>
      <Button type='secondary' onClick={action('clicked')} extra>
        Secondary
      </Button>
    </article>
  </section>
);

export const SubtleButton = () => (
  <section className='section'>
    <h2 className='title'>Subtle </h2>
    <article className='row'>
      <Subtle onClick={action('clicked')}>
        Subtle
      </Subtle>
      <Subtle Icon={Icon} onClick={action('clicked')}>
        Subtle
      </Subtle>
      <Subtle Icon={Icon} position='right' onClick={action('clicked')}>
        Subtle
      </Subtle>
    </article>
  </section>
);
