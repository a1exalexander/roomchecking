import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { routeName } from 'router/const';
import { ReactComponent as IconLogOut } from 'assets/svg/Logout.svg';
import './LogoutBtn.scss';

export const LogoutBtn = ({ className }) => {
  return (
    <Link to={routeName.HOME} className={cx('LogoutBtn', className)}>
      <span className='LogoutBtn__text'>Log Out</span>
      <IconLogOut className='LogoutBtn__icon' />
    </Link>
  );
};

LogoutBtn.defaultProps = {
  className: null,
};

LogoutBtn.propTypes = {
  className: string,
};

export default LogoutBtn;
