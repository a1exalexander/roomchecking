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

export const Badge = ({
  size,
  ellipsis,
  className,
  children,
  style,
  color,
  fluid,
}) => {
  return (
    <span
      className={cx(
        'Badge',
        `_${color}`,
        { _fluid: fluid },
        `_${size}`,
        className
      )}
      style={style}
    >
      <span className={cx('Badge__text', { _ellipsis: ellipsis })}>
        {children}
      </span>
    </span>
  );
};

Badge.defaultProps = {
  className: null,
  style: null,
  color: 'grey',
  fluid: false,
  ellipsis: false,
  size: 'normal',
};

Badge.propTypes = {
  className: string,
  children: oneOfType([number, string, element]).isRequired,
  style: objectOf(any),
  color: oneOf(['grey', 'dark', 'green', 'blue', 'red', 'yellow', 'purple']),
  fluid: bool,
  ellipsis: bool,
  size: oneOf(['small', 'normal', 'large']),
};

export default Badge;
