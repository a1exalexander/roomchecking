import React from 'react';
import cx from 'classnames';
import { string, func, bool, oneOfType, number, object } from 'prop-types';
import './NewStrategy.scss';
import { Button, Row, IconButton, Input, Select } from 'components';
import { ReactComponent as IconClose } from 'assets/svg/Close.svg';

const data = [...new Array(10).keys()].map((item, idx) => ({
  id: idx + 1,
  value: `Option ${idx + 1}`,
}));

export const NewStrategy = ({
  className,
  onClose,
  isNew,
  name,
  source,
  period,
  comment,
  onChangeName,
  onChangeSource,
  onChangePeriod,
  onChangeComment,
  onSubmit,
}) => {
  return (
    <div className={cx('NewStrategy', { _new: !isNew }, className)}>
      <Row justifyContent='space-between' className='NewStrategy__head'>
        <h3 className='NewStrategy__heading' alignItems='flex-start'>
          {isNew ? 'Add Cleaning Strategy' : 'Edit Cleaning Strategy'}
        </h3>
        <IconButton onClick={onClose}>
          <IconClose />
        </IconButton>
      </Row>

      <Row alignItems='flex-end'>
        <Input
          className='NewStrategy__input'
          label='Name'
          value={name}
          onChange={onChangeName}
        />
        <Select
          className='NewStrategy__input'
          data={data}
          label='Source'
          value={source}
          onChange={onChangeSource}
        />
        <Select
          className='NewStrategy__input'
          data={data}
          label='Period'
          value={period}
          onChange={onChangePeriod}
        />
        <Input
          value={comment}
          onChange={onChangeComment}
          className='NewStrategy__input NewStrategy__input--large'
          label='Comment'
        />
        <Button
          className='NewStrategy__add-btn'
          type='secondary'
          onSubmit={onSubmit}
        >
          {isNew ? 'Add' : 'Save'}
        </Button>
      </Row>
    </div>
  );
};

NewStrategy.defaultProps = {
  className: null,
  onClose: () => void 1,
  isNew: false,
};

NewStrategy.propTypes = {
  onClose: func,
  className: string,
  isNew: bool,
  name: oneOfType([string, number, object]),
  source: oneOfType([string, number, object]),
  period: oneOfType([string, number, object]),
  comment: oneOfType([string, number, object]),
  onChangeName: func.isRequired,
  onChangeSource: func.isRequired,
  onChangePeriod: func.isRequired,
  onChangeComment: func.isRequired,
  onSubmit: func.isRequired,
};

export default NewStrategy;
