import React, { useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';
import cx from 'classnames';
import { string, number, objectOf, any, oneOfType, node } from 'prop-types';
import './Stat.scss';

export const Stat = ({ label, value, className, style, children }) => {
  const [count, setCount] = useState(value || 0);
  const { countUp, update } = useCountUp({
    end: count,
    separator: ',',
    decimal: '.',
    duration: 1,
  });
  useEffect(() => {
    setCount(value);
    update(value);
  }, [update, value]);

  return (
    <div className={cx('Stat', className)} style={style}>
      <span className='Stat__value'>{countUp}</span>
      <span className='Stat__label'>{label || children}</span>
    </div>
  );
};

Stat.defaultProps = {
  className: null,
  style: null,
};

Stat.propTypes = {
  label: string,
  value: oneOfType([number, string]).isRequired,
  style: objectOf(any),
  children: node,
};

export default Stat;
