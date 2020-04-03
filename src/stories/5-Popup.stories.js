import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Popup, Button } from 'components/common';
import './style.scss';

export default {
  title: 'Popup',
};

export const DefaultPopup = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className='section'>
      <h2 className='title'>Popup</h2>
      <article className='row'>
        <Button onClick={() => setVisible(true)}>Open Popup</Button>
        <Popup
          title='Popup Title'
          visible={visible}
          onClose={() => setVisible(false)}
          onPrimaryClick={action('Primary Button Clicked')}
        >
          This is default Popup
        </Popup>
      </article>
    </section>
  );
};

export const RemovePopup = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className='section'>
      <h2 className='title'>Popup with Remove Button</h2>
      <article className='row'>
        <Button onClick={() => setVisible(true)}>Open Popup</Button>
        <Popup
          visible={visible}
          title='Popup Title'
          dangerButton='Remove'
          primaryButton={false}
          onClose={() => setVisible(false)}
          onDangerClick={action('Remove Button Clicked')}
        >
          Do you want remove something?
        </Popup>
      </article>
    </section>
  );
};
