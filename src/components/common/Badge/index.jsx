import React from 'react';
import cx from 'classnames';
import {
  number,
  string,
  oneOfType,
  objectOf,
  element,
  any,
  oneOf,
  bool,
} from 'prop-types';
import './Badge.scss';

export const Badge = ({ className, children, style, color, fluid }) => {
  return (
    <span
      className={cx('Badge', `_${color}`, { _fluid: fluid }, className)}
      style={style}
    >
      {children}
    </span>
  );
};

Badge.defaultProps = {
  className: null,
  style: null,
  color: 'grey',
  fluid: false,
};

Badge.propTypes = {
  className: string,
  children: oneOfType([number, string, element]).isRequired,
  style: objectOf(any),
  color: oneOf(['grey', 'dark', 'green', 'blue', 'red', 'yellow', 'purple']),
  fluid: bool,
};

export default Badge;
