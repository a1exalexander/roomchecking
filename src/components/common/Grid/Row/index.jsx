import React from 'react';
import { string, bool, node } from 'prop-types';
import cx from 'classnames';
import './Row.scss';

export const Row = ({
  children,
  className,
  justifyContent,
  alignItems,
  direction,
  wrap,
  alignContent,
}) => {
  return (
    <div
      className={cx('Row', className)}
      style={{
        justifyContent,
        alignItems,
        alignContent,
        flexDirection: direction,
        flexWrap: wrap ? 'wrap' : 'no-wrap',
      }}
    >
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: null,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch ',
  direction: 'row',
  wrap: false,
};

Row.propTypes = {
  children: node,
  className: string,
  justifyContent: string,
  alignItems: string,
  direction: string,
  alignContent: string,
  wrap: bool,
};

export default Row;
