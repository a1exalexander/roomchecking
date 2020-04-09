import React from 'react';
import { func, string, bool, oneOfType, object, node } from 'prop-types';
import cx from 'classnames';
import { ReactComponent as IconArrowLeft } from 'assets/svg/ArrowLeft.svg';
import './BackButton.scss';
import { Link } from 'react-router-dom';

export const BackButton = ({
  onClick,
  children,
  Icon,
  className,
  link,
  to,
}) => {
  const renderContent = () => (
    <>
      {Icon ? (
        <Icon className='BackButton__icon' />
      ) : (
        <div className='BackButton__icon-wrapper'>
          <IconArrowLeft className='BackButton__icon-back' />
        </div>
      )}
      <span className='BackButton__text'>{children}</span>
    </>
  );
  return link ? (
    <Link className={cx('BackButton', className)} to={to}>
      {renderContent()}
    </Link>
  ) : (
    <button className={cx('BackButton', className)} onClick={onClick}>
      {renderContent()}
    </button>
  );
};

BackButton.defaultProps = {
  Icon: null,
  className: null,
  link: false,
  onClick: undefined,
  to: '',
};

BackButton.propTypes = {
  onClick: func,
  children: node.isRequired,
  Icon: object,
  className: string,
  link: bool,
  to: oneOfType([object, string]),
};

export default BackButton;
