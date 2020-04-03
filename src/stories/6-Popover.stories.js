import React from 'react';
import { Popover as PopoverElement } from 'components/common';
import './style.scss';
import { action } from '@storybook/addon-actions';
import { Button } from 'components/common';

export default {
  title: 'Popover',
};

export const Popover = () => {
  return (
    <section className='section'>
      <h2 className='title'>Popover</h2>
      <article className='row'>
        <PopoverElement
          width='400px'
          Target={() => <Button onClick={action('Click')}>Toggle Popover</Button>}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque suscipit ipsum, eu lobortis neque eleifend id. Nunc ac
          sollicitudin mi. Praesent maximus ligula nec libero ullamcorper, a
          vehicula purus gravida. In egestas libero vitae dignissim maximus.
          Pellentesque sagittis tortor ex, a convallis nulla gravida bibendum.
        </PopoverElement>
      </article>
    </section>
  );
};
