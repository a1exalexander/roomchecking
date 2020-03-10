import React from 'react';
import { func, string, element, oneOf } from 'prop-types';
import cx from 'classnames';
import './Subtle.scss';

export const Subtle = ({ onClick, children, Icon, position }) => {
  const isIconRight = position === 'right';

  return (
    <button
      className={cx('Subtle', { '_icon-right': isIconRight })}
      onClick={onClick}
    >
      {Icon && <Icon className='Subtle__icon' />}
      <span className='Subtle__text'>{children}</span>
    </button>
  );
};

Subtle.defaultProps = {
  Icon: null,
  position: 'left'
};

Subtle.propTypes = {
  onClick: func.isRequired,
  children: string.isRequired,
  Icon: element,
  position: oneOf('left, right')
};

export default Subtle;
