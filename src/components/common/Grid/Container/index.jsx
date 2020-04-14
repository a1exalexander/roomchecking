import React from 'react';
import { string, node } from 'prop-types';
import cx from 'classnames';
import './Container.scss';

export const Container = ({ children, className, contentClassName }) => {
  return (
    <div className={cx('Container', className)}>
      <div className={cx('Container__content', contentClassName)}>
        {children}
      </div>
    </div>
  );
};

Container.defaultProps = {
  className: null,
  contentClassName: null,
};

Container.propTypes = {
  children: node,
  className: string,
  contentClassName: string,
};

export default Container;
