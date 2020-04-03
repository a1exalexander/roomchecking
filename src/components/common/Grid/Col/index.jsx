import React from 'react';
import { element, string, bool, number } from 'prop-types';
import cx from 'classnames';
import './Col.scss';

export const Col = ({
  children,
  className,
  justifyContent,
  alignItems,
  direction,
  wrap,
  alignContent,
  fluid,
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
        flexGrow: fluid && !grow ? 1 : grow,
        width,
        flexShrink: shrink,
      }}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  className: null,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  alignContent: 'stretch ',
  direction: 'column',
  wrap: false,
  fluid: false,
  grow: 0,
  shrink: 1,
};

Col.propTypes = {
  children: element,
  className: string,
  justifyContent: string,
  alignItems: string,
  direction: string,
  alignContent: string,
  wrap: bool,
  fluid: bool,
  grow: number,
  shrink: number,
};

export default Col;
