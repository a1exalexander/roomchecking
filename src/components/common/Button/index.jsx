import React from 'react';
import { func, bool, string, oneOf, element } from 'prop-types';
import cx from 'classnames';
import './Button.scss';

export const Button = ({
  type,
  onClick,
  children,
  disabled,
  loading,
  extra,
  Icon
}) => {
  return (
    <button
      className={cx('Button', type, { _loading: loading, _extra: extra })}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon className='Button__icon' />}
      <span className='Button__text'>{children}</span>
      <span className='Button__extra'>&bull;&bull;&bull;</span>
      <svg
        className={cx('Button__loading')}
        focusable='false'
        viewBox='0 0 20 20'
      >
        <circle cx='10' cy='10' r='9' />
      </svg>
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'primary',
  loading: false,
  extra: false,
  Icon: null
};

Button.propTypes = {
  onClick: func.isRequired,
  children: string.isRequired,
  disabled: bool,
  type: oneOf('primary, secondary'),
  loading: bool,
  extra: bool,
  Icon: element
};

export default Button;
