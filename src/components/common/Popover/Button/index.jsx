import React from 'react';
import { func, string, node, object } from 'prop-types';
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
  onClick: undefined,
};

PopoverButton.propTypes = {
  onClick: func,
  children: node.isRequired,
  Icon: object,
  className: string,
};

export default PopoverButton;
