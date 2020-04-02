import React, { useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';
import cx from 'classnames';
import { string, number, objectOf, any, oneOfType } from 'prop-types';
import './Stat.scss';

export const Stat = ({ label, value, className, style }) => {
  const [count, setCount] = useState(value || 0);
  const { countUp, update } = useCountUp({
    end: count,
    separator: ',',
    decimal: '.',
    duration: 1
  });
  useEffect(() => {
    setCount(value);
    update(value);
  }, [update, value]);

  return (
    <div className={cx('Stat', className)} style={style}>
      <span className='Stat__value'>{countUp}</span>
      <span className='Stat__label'>{label}</span>
    </div>
  );
};

Stat.defaultProps = {
  className: null,
  style: null
};

Stat.propTypes = {
  label: string.isRequired,
  value: oneOfType([number, string]).isRequired,
  style: objectOf(any)
};

export default Stat;
