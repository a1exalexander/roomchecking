import React from 'react';
import { element, string, bool, number } from 'prop-types';
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
  grow,
  shrink,
  width,
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
        flexGrow: grow,
        width,
        flexShrink: shrink,
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
  grow: 0,
  shrink: 1,
};

Row.propTypes = {
  children: element,
  className: string,
  justifyContent: string,
  alignItems: string,
  direction: string,
  alignContent: string,
  wrap: bool,
  grow: number,
  shrink: number,
};

export default Row;
