import React from 'react';
import { string, number, oneOfType, oneOf } from 'prop-types';
import cx from 'classnames';
import './Popover.scss';

const offset = '-6px';
const positions = {
  'top-left': { top: 'auto', right: 'auto', bottom: '100%', left: offset },
  'top-right': { top: 'auto', right: offset, bottom: '100%', left: 'auto' },
  right: { top: 0, right: 'auto', bottom: 'auto', left: '100%' },
  'bottom-left': { top: '100%', right: 'auto', bottom: 'auto', left: offset },
  'bottom-right': { top: '100%', right: offset, bottom: 'auto', left: 'auto' },
  left: { top: 'auto', right: '100%', bottom: 'auto', left: 0 },
};

export const Popover = ({
  children,
  Target,
  className,
  width,
  top,
  right,
  left,
  bottom,
  position,
}) => {
  return (
    <div className={cx('Popover__wrapper', className)}>
      <Target className='Popover__target' />
      <div
        className={cx('Popover')}
        style={{
          ...positions[position],
          paddingTop: top,
          paddingRight: right,
          paddingLeft: left,
          paddingBottom: bottom,
        }}
      >
        <div className='Popover__card' style={{ width }}>
          {children}
        </div>
      </div>
    </div>
  );
};

Popover.defaultProps = {
  className: null,
  width: 'auto',
  top: '4px',
  right: 0,
  left: 0,
  bottom: 0,
  position: 'bottom-left',
};

Popover.propTypes = {
  className: string,
  children: string.isRequired,
  width: string,
  top: oneOfType([string, number]),
  right: oneOfType([string, number]),
  left: oneOfType([string, number]),
  bottom: oneOfType([string, number]),
  position: oneOf([
    'top-left',
    'top-right',
    'right',
    'right-center',
    'bottom-left',
    'bottom-right',
    'left',
  ]),
};

export default Popover;
