import React from 'react';
import { func, string, oneOf, bool, oneOfType, object, node } from 'prop-types';
import cx from 'classnames';
import './Subtle.scss';
import { Link } from 'react-router-dom';

export const Subtle = ({
  onClick,
  children,
  Icon,
  position,
  className,
  link,
  to,
}) => {
  const isIconRight = position === 'right';

  const renderContent = () => (
    <>
      {Icon && <Icon className={cx('Subtle__icon')} />}
      <span className='Subtle__text'>{children}</span>
    </>
  );
  return link ? (
    <Link
      className={cx('Subtle', { '_icon-right': isIconRight }, className)}
      to={to}
    >
      {renderContent()}
    </Link>
  ) : (
    <button
      className={cx('Subtle', { '_icon-right': isIconRight }, className)}
      onClick={onClick}
    >
      {renderContent()}
    </button>
  );
};

Subtle.defaultProps = {
  Icon: null,
  position: 'left',
  className: null,
  link: false,
  onClick: undefined,
  to: '',
};

Subtle.propTypes = {
  onClick: func,
  children: node.isRequired,
  Icon: object,
  position: oneOf(['left', 'right']),
  className: string,
  link: bool,
  to: oneOfType([object, string]),
};

export default Subtle;
