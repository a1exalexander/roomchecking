import React from 'react';
import { func, string, bool, oneOfType, object, node } from 'prop-types';
import cx from 'classnames';
import './IconButton.scss';
import { Link } from 'react-router-dom';

export const IconButton = ({ onClick, children, className, link, to }) => {
  return link ? (
    <Link className={cx('IconButton', className)} to={to}>
      {children}
    </Link>
  ) : (
    <button className={cx('IconButton', className)} onClick={onClick}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  className: null,
  link: false,
  onClick: undefined,
  to: '',
};

IconButton.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
  link: bool,
  to: oneOfType([object, string]),
};

export default IconButton;
