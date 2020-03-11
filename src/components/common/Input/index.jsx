import React, { useMemo } from 'react';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { string } from 'prop-types';
import './Input.scss';

export const Input = ({ label, labelClassName, inputClassName, className }) => {

  const id = useMemo(uuidv4);

  return (
    <div className={cx('Input', className)}>
      {label && <label className={cx('Input__label', labelClassName)} htmlFor={id}>{label}</label>}
      <input id={id} type='text' className={cx('Input__input', inputClassName)} />
    </div>
  );
};

Input.defaultProps = {
  label: null,
  labelClassName: null,
  inputClassName: null
}

Input.propTypes = {
  label: string,
  labelClassName: string,
  inputClassName: string
}

export default Input;
