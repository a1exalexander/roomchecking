import React from 'react';
import { func, string, element, oneOf } from 'prop-types';
import cx from 'classnames';
import './Subtle.scss';

export const Subtle = ({ onClick, children, Icon, position, className }) => {
  const isIconRight = position === 'right';

  return (
    <button
      className={cx('Subtle', { '_icon-right': isIconRight }, className)}
      onClick={onClick}
    >
      {Icon && <Icon className='Subtle__icon' />}
      <span className='Subtle__text'>{children}</span>
    </button>
  );
};

Subtle.defaultProps = {
  Icon: null,
  position: 'left',
  className: null
};

Subtle.propTypes = {
  onClick: func.isRequired,
  children: string.isRequired,
  Icon: element,
  position: oneOf('left, right'),
  className: string
};

export default Subtle;
