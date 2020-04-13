import React from 'react';
import cx from 'classnames';
import { string, func, bool, oneOfType, number, object } from 'prop-types';
import './EditStrategy.scss';
import { Button, Row, IconButton, Input, Select } from 'components';
import { ReactComponent as IconClose } from 'assets/svg/Close.svg';

const data = [...new Array(10).keys()].map((item, idx) => ({
  id: idx + 1,
  value: `Option ${idx + 1}`,
}));

export const EditStrategy = ({
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
    <div className={cx('EditStrategy', { _new: !isNew }, className)}>
      <Row
        justifyContent='space-between'
        className='EditStrategy__head'
        alignItems='flex-start'
      >
        <h3 className='EditStrategy__heading'>
          {isNew ? 'Add Cleaning Strategy' : 'Edit Cleaning Strategy'}
        </h3>
        <IconButton onClick={onClose}>
          <IconClose />
        </IconButton>
      </Row>

      <Row alignItems='flex-end'>
        <Input
          className='EditStrategy__input'
          label='Name'
          value={name}
          onChange={onChangeName}
        />
        <Select
          className='EditStrategy__input'
          data={data}
          label='Source'
          value={source}
          onChange={onChangeSource}
        />
        <Select
          className='EditStrategy__input'
          data={data}
          label='Period'
          value={period}
          onChange={onChangePeriod}
        />
        <Input
          value={comment}
          onChange={onChangeComment}
          className='EditStrategy__input EditStrategy__input--large'
          label='Comment'
        />
        <Button
          className='EditStrategy__add-btn'
          type='secondary'
          onClick={onSubmit}
        >
          {isNew ? 'Add' : 'Save'}
        </Button>
      </Row>
    </div>
  );
};

EditStrategy.defaultProps = {
  className: null,
  onClose: () => void 1,
  isNew: false,
};

EditStrategy.propTypes = {
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

export default EditStrategy;
