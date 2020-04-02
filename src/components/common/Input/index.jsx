import React, { useMemo } from 'react';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { string, oneOf, bool } from 'prop-types';
import './Input.scss';

export const Input = ({
  type,
  label,
  disabled,
  labelClassName,
  inputClassName,
  className,
  status
}) => {
  const id = useMemo(uuidv4);

  return (
    <div className={cx('Input', className)}>
      {label && (
        <label className={cx('Input__label', labelClassName)} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        className={cx('Input__input', inputClassName, {
          _error: status === 'error',
          _success: status === 'success'
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
  status: 'default'
};

Input.propTypes = {
  label: string,
  labelClassName: string,
  inputClassName: string,
  type: oneOf(['text', 'password', 'tel']),
  disabled: bool,
  status: oneOf('default', 'error', 'success')
};

export default Input;
