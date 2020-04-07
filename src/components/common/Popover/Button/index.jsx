import React from 'react';
import { func, string, element } from 'prop-types';
import cx from 'classnames';
import './PopoverButton.scss';

export const PopoverButton = ({ onClick, children, Icon, className }) => {
  return (
    <button className={cx('PopoverButton', className)} onClick={onClick}>
      {Icon && <Icon className='PopoverButton__icon' />}
      <span className='PopoverButton__text'>{children}</span>
    </button>
  );
};

PopoverButton.defaultProps = {
  Icon: null,
  className: null,
};

PopoverButton.propTypes = {
  onClick: func.isRequired,
  children: string.isRequired,
  Icon: element,
  className: string,
};

export default PopoverButton;
