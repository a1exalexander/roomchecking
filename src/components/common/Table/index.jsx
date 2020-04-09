import React from 'react';
import cx from 'classnames';
import { string, objectOf, any, bool, node } from 'prop-types';
import './Table.scss';

export const Table = ({ className, children, style, fluid }) => {
  return (
    <table className={cx('Table', { _fluid: fluid }, className)} style={style}>
      {children}
    </table>
  );
};

Table.defaultProps = {
  className: null,
  style: null,
  fluid: true,
};

Table.propTypes = {
  className: string,
  children: node.isRequired,
  style: objectOf(any),
  fluid: bool,
};

export default Table;
