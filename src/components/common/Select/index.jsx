import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { oneOfType, string, arrayOf, object, number, func } from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as IconTriangle } from 'assets/svg/Dropdown.svg';
import { isObject } from 'utils';
import './Select.scss';
import { CSSTransition } from 'react-transition-group';

export const Select = ({
  className,
  data,
  value,
  onChange,
  display,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = uuidv4();

  const onSelect = (item) => {
    onChange(item);
    setIsOpen(false);
  };

  const hide = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const getValue = (item) => (isObject(item) ? item?.[display] : item || '');

  const renderItem = (item, idx) => {
    const key = item?.id || String(idx);
    return (
      <li
        onClickCapture={() => onSelect(item)}
        className={classNames('Select__option', {
          _active: getValue(item) === getValue(value),
        })}
        key={key}
      >
        {getValue(item)}
      </li>
    );
  };

  return (
    <div className={classNames('Select', className)}>
      <OutsideClickHandler disabled={!isOpen} onOutsideClick={hide}>
        <>
          {label && (
            <label className='Select__label' htmlFor={id}>
              {label}
            </label>
          )}
          <div onClick={toggle} className='Select__input-wrapper'>
            <input
              id={id}
              type='text'
              readOnly
              className={classNames('Select__input', { _active: isOpen })}
              value={getValue(value)}
            />
            <IconTriangle
              className={classNames('Select__icon', { _active: isOpen })}
            />
          </div>
          <CSSTransition
            in={isOpen}
            className='Select__list animated faster'
            unmountOnExit
            classNames={{
              enterActive: 'pullDown',
              exitActive: 'pullDown reverse',
            }}
            timeout={200}
          >
            <ul>{data.map(renderItem)}</ul>
          </CSSTransition>
        </>
      </OutsideClickHandler>
    </div>
  );
};

Select.defaultProps = {
  className: null,
  onChange: () => void 1,
  display: 'value',
  label: null,
};

Select.propTypes = {
  className: string,
  data: arrayOf(oneOfType([string, number, object])).isRequired,
  value: oneOfType([object, string, number]).isRequired,
  onChange: func,
  display: string,
  label: string,
};

export default Select;
