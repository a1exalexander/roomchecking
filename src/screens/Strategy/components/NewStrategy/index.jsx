import React, { useState } from 'react';
import cx from 'classnames';
import { string, func } from 'prop-types';
import './NewStrategy.scss';
import { Button, Row, IconButton, Input, Select } from 'components';
import { ReactComponent as IconClose } from 'assets/svg/Close.svg';

const data = [...new Array(10).keys()].map((item, idx) => ({
  id: idx + 1,
  value: `Option ${idx + 1}`,
}));

export const NewStrategy = ({ className, onClose }) => {
  const [source, setSource] = useState();
  const [period, setPeriod] = useState();

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
        <Select
          className='NewStrategy__input'
          data={data}
          label='Source'
          value={source}
          onChange={setSource}
        />
        <Select
          className='NewStrategy__input'
          data={data}
          label='Period'
          value={period}
          onChange={setPeriod}
        />
        <Input
          className='NewStrategy__input NewStrategy__input--large'
          label='Comment'
        />
        <Button className='NewStrategy__add-btn' type='secondary'>
          Add
        </Button>
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
