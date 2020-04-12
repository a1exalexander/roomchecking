import React from 'react';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { string, oneOf, bool, func, any, objectOf } from 'prop-types';
import './Input.scss';

export const Input = ({
  type,
  label,
  disabled,
  labelClassName,
  inputClassName,
  className,
  status,
  value,
  style,
  onChange,
  placeholder,
}) => {
  const id = uuidv4();
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className={cx('Input', className)} style={style}>
      {label && (
        <label className={cx('Input__label', labelClassName)} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className={cx('Input__input', inputClassName, {
          _error: status === 'error',
          _success: status === 'success',
        })}
      />
    </div>
  );
};

Input.defaultProps = {
  label: null,
  labelClassName: null,
  inputClassName: null,
  type: 'text',
  disabled: false,
  status: 'default',
  onChange: () => null,
  style: null,
  placeholder: '',
};

Input.propTypes = {
  label: string,
  labelClassName: string,
  inputClassName: string,
  type: string,
  disabled: bool,
  status: oneOf(['default', 'error', 'success']),
  value: string.isRequired,
  onChange: func,
  style: objectOf(any),
  placeholder: string,
};

export default Input;
