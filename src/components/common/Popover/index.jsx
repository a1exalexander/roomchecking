import React from 'react';
import { string, number, oneOfType, oneOf } from 'prop-types';
import cx from 'classnames';
import './Popover.scss';

const positions = {
  'top-left': { top: 'auto', right: 'auto', bottom: '100%', left: 0 },
  'top-right': { top: 'auto', right: 0, bottom: '100%', left: 'auto' },
  right: { top: 0, right: 'auto', bottom: 'auto', left: '100%' },
  'bottom-left': { top: '100%', right: 'auto', bottom: '100%', left: 0 },
  'bottom-right': { top: '100%', right: 'auto', bottom: '100%', left: 0 },
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
    <div className='Popover__wrapper'>
      <Target className='Popover__target' />
      <div
        className={cx('Popover', className)}
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
  width: '200px',
  top: '8px',
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
    'top-right',
    'right',
    'right-center',
    'bottom-left',
    'bottom-right',
    'bottom-right',
    'left',
  ]),
};

export default Popover;
