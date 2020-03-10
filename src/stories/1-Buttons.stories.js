import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Subtle } from 'components/common';
import { title, container, row } from './style.module.scss';

export default {
  title: 'Buttons',
  component: Button
};

const Icon = ({ className }) => (
  <span className={className} role='img' aria-label='icon'>
    ⚡️
  </span>
);

export const Primary = () => (
  <div className={container}>
    <h2 className={title}>Primary Button</h2>
    <div className={row}>
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
    </div>
  </div>
);

export const Secondary = () => (
  <div className={container}>
    <h2 className={title}>Secondary Button</h2>
    <div className={row}>
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
    </div>
  </div>
);

export const SubtleButton = () => (
  <div className={container}>
    <h2 className={title}>Subtle </h2>
    <div className={row}>
      <Subtle onClick={action('clicked')}>
        Subtle
      </Subtle>
      <Subtle Icon={Icon} onClick={action('clicked')}>
        Subtle
      </Subtle>
      <Subtle Icon={Icon} position='right' onClick={action('clicked')}>
        Subtle
      </Subtle>
    </div>
  </div>
);
