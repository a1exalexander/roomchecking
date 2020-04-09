import React from 'react';
import cx from 'classnames';
import { string, objectOf, any, func } from 'prop-types';
import './NewStrategy.scss';
import { Button, Row, IconButton, Input } from 'components';
import { ReactComponent as IconClose } from 'assets/svg/Close.svg';

export const NewStrategy = ({ className, onClose }) => {
  return (
    <div className={cx('NewStrategy', className)}>
      <Row justifyContent='space-between' className='NewStrategy__head'>
        <h3 className='NewStrategy__heading' alignItems='flex-start'>
          Add Cleaning Strategy
        </h3>
        <IconButton onClick={onClose}>
          <IconClose />
        </IconButton>
      </Row>
      <Row alignItems='flex-end'>
        <Input className='NewStrategy__input' label='Name' />
        <Input className='NewStrategy__input' label='Source' />
        <Input className='NewStrategy__input' label='Period' />
        <Input className='NewStrategy__input NewStrategy__input--large' label='Comment' />
        <Button className='NewStrategy__add-btn' type='secondary'>Add</Button>
      </Row>
    </div>
  );
};

NewStrategy.defaultProps = {
  className: null,
  onClose: () => null,
};

NewStrategy.propTypes = {
  onClose: func,
  className: string,
};

export default NewStrategy;
