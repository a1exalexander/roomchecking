import React from 'react';
import { oneOfType, string, bool, number, func } from 'prop-types';
import { ReactComponent as IconCheck } from 'assets/svg/Check.svg';
import cx from 'classnames';
import './Checkbox.scss';

export const Checkbox = ({ name, value, checked, onChange, className }) => {

  const handleChange = e => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <label className={cx('Checkbox', className)}>
      <input name={name} className='Checkbox__input' value={value} checked={checked} onChange={handleChange} type='checkbox' />
      <span className='Checkbox__cell'>
        <IconCheck className='Checkbox__icon animated faster bounceIn' />
      </span>
    </label>
  );
};

Checkbox.defaultProps = {
  value: true,
  className: null,
  name: 'checkboxes'
}

Checkbox.propTypes = {
  checked: bool.isRequired,
  value: oneOfType([string, bool, number]),
  onChange: func.isRequired,
  className: string,
  name: string
}

export default Checkbox;
