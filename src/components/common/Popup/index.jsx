import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { string, bool, oneOfType, func, node } from 'prop-types';
import cx from 'classnames';
import { ReactComponent as IconClose } from 'assets/svg/Close.svg';
import './Popup.scss';
import Button from '../Button';
import Row from '../Grid/Row';
import { fakeFunc } from 'utils';

export const Popup = ({
  children,
  title,
  width,
  className,
  visible,
  secondaryButton,
  dangerButton,
  primaryButton,
  onSecondaryClick,
  onDangerClick,
  onPrimaryClick,
  onClose,
}) => {
  const onClickStop = (e) => {
    e.stopPropagation();
  };
  return (
    <CSSTransition in={visible} unmountOnExit classNames='fade' timeout={200}>
      <div className={cx('Popup', className)}>
        <div className='Popup__inner' onClick={onClose}>
          <article
            onClick={onClickStop}
            className={cx('Popup__card', 'animated faster', {
              zoomIn: visible,
            })}
            style={{ width }}
          >
            <Row
              justifyContent='space-between'
              align-items='center'
              className='Popup__header'
            >
              <h3 className='Popup__title'>{title}</h3>
              <button onClick={onClose} className='Popup__close-btn'>
                <IconClose className='Popup__close-icon' />
              </button>
            </Row>
            <div className='Popup__content'>{children}</div>
            <Row justifyContent='flex-end'>
              {secondaryButton && (
                <Button
                  type='secondary'
                  onClick={onSecondaryClick ? onSecondaryClick : onClose}
                  className='Popup__button'
                >
                  {secondaryButton}
                </Button>
              )}
              {dangerButton && (
                <Button
                  type='danger'
                  onClick={onDangerClick ? onDangerClick : fakeFunc}
                  className='Popup__button'
                >
                  {dangerButton}
                </Button>
              )}
              {primaryButton && (
                <Button
                  type='primary'
                  onClick={onPrimaryClick ? onPrimaryClick : fakeFunc}
                  className='Popup__button'
                >
                  {primaryButton}
                </Button>
              )}
            </Row>
          </article>
        </div>
      </div>
    </CSSTransition>
  );
};

Popup.defaultProps = {
  width: '333px',
  className: null,
  visible: true,
  secondaryButton: 'Cancel',
  dangerButton: '',
  primaryButton: 'Submit',
  onDangerClick: undefined,
  onSecondaryClick: undefined,
  onPrimaryClick: undefined,
};

Popup.propTypes = {
  title: string.isRequired,
  onClose: func.isRequired,
  className: string,
  children: node,
  width: string,
  visible: bool,
  secondaryButton: oneOfType([string, bool]),
  dangerButton: oneOfType([string, bool]),
  primaryButton: oneOfType([string, bool]),
  onDangerClick: func,
  onSecondaryClick: func,
  onPrimaryClick: func,
};

export default Popup;
