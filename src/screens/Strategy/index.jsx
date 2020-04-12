import React, { useState } from 'react';
import cx from 'classnames';
import {
  Input,
  Subtle,
  Button,
  Table,
  Badge,
  BackButton,
  IconButton,
  Popup,
  Row,
  Stat,
} from 'components/common';
import './Strategy.scss';
import { ReactComponent as IconPlus } from 'assets/svg/Plus.svg';
import { ReactComponent as IconTrash } from 'assets/svg/Trash.svg';
import { ReactComponent as IconEdit } from 'assets/svg/edit.svg';
import { routePath } from 'router';
import NewStrategy from './components/NewStrategy';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { has } from 'utils';

export const StrategyScreen = () => {
  const [ruleInfo, setRuleInfo] = useState({
    ruleName: '',
    comment: '',
  });
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [newStrategyVisible, setNewStrategyVisible] = useState(false);

  const [newStrategy, setNewStrategy] = useState({
    name: '',
    source: null,
    period: null,
    comment: '',
  });

  const onChangeNewStrategy = (key) => (value) => {
    setNewStrategy((prevState) => ({ ...prevState, [key]: value }));
  };

  const onRuleInfoChange = (type) => (value) => {
    if (has(newStrategy, type)) {
      setRuleInfo((prevState) => ({ ...prevState, [type]: value }));
    }
  };

  return (
    <div className='Strategy'>
      <header className='Strategy__header'>
        <Popup
          width='420px'
          visible={visiblePopup}
          onClose={() => setVisiblePopup(false)}
          title='Remove Cleaning Strategy'
          dangerButton='Remove'
          primaryButton={false}
        >
          Are you sure you want to remove this Cleaning Strategy?
        </Popup>
        <Row className='Strategy__head'>
          <BackButton link to={routePath.STRATEGIES}>
            Back to Rules List
          </BackButton>
        </Row>
        <Row justifyContent='space-between' className='Strategy__hotel-info'>
          <Row className='Strategy__inputs' alignItems='flex-end'>
            <Input
              label='Rule Name'
              value={ruleInfo.ruleName}
              onChange={onRuleInfoChange('ruleName')}
              className='Strategy__input Strategy__input--small'
            />
            <Input
              label='Comment'
              value={ruleInfo.comment}
              onChange={onRuleInfoChange('comment')}
              className='Strategy__input Strategy__input--large'
            />
          </Row>
          <Row alignItems='flex-end'>
            <Button type='secondary' className='Strategy__cancel-btn'>
              Cancel
            </Button>
            <Button>Save</Button>
          </Row>
        </Row>
        <Table
          className={cx('Strategy__table', { _active: newStrategyVisible })}
        >
          <thead>
            <tr>
              <th>cleaning strategies</th>
              <th>source</th>
              <th>period</th>
              <th>comment</th>
            </tr>
          </thead>

          {[1, 2].map((i) => (
            <tbody>
              <tr key={i}>
                <td>
                  <Badge fluid={true}>REC</Badge>
                </td>
                <td>PMS: Tag</td>
                <td>Daily Cleaning</td>
                <td>
                  <Row justifyContent='space-between'>
                    <span>Lorem ipsum dolor sit amet.</span>
                    <Row>
                      <IconButton className='Strategy__action-button'>
                        <IconEdit />
                      </IconButton>
                      <IconButton className='Strategy__action-button'>
                        <IconTrash />
                      </IconButton>
                    </Row>
                  </Row>
                </td>
              </tr>
              <CSSTransition
                in={false}
                unmountOnExit
                className='animated faster'
                timeout={200}
                classNames={{
                  enterActive: 'pullDown',
                  exitActive: 'fadeOutUp',
                }}
              >
                <tr>
                  <td colSpan='4'>
                    <NewStrategy
                      name={newStrategy.name}
                      source={newStrategy.source}
                      period={newStrategy.period}
                      comment={newStrategy.comment}
                      onChangeName={onChangeNewStrategy('name')}
                      onChangeSource={onChangeNewStrategy('source')}
                      onChangePeriod={onChangeNewStrategy('period')}
                      onChangeComment={onChangeNewStrategy('comment')}
                      onClose={() => setNewStrategyVisible(false)}
                    />
                  </td>
                </tr>
              </CSSTransition>
            </tbody>
          ))}
        </Table>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            className='animated faster'
            timeout={200}
            classNames={{
              enterActive: 'pullDown',
              exitActive: 'fadeOutUp',
            }}
            key={newStrategyVisible}
          >
            {newStrategyVisible ? (
              <NewStrategy
                isNew
                key='new-strategy'
                name={newStrategy.name}
                source={newStrategy.source}
                period={newStrategy.period}
                comment={newStrategy.comment}
                onChangeName={onChangeNewStrategy('name')}
                onChangeSource={onChangeNewStrategy('source')}
                onChangePeriod={onChangeNewStrategy('period')}
                onChangeComment={onChangeNewStrategy('comment')}
                onClose={() => setNewStrategyVisible(false)}
              />
            ) : (
              <Subtle
                key='button'
                Icon={IconPlus}
                onClick={() => setNewStrategyVisible(true)}
              >
                Add New Cleaning Strategy
              </Subtle>
            )}
          </CSSTransition>
        </SwitchTransition>
      </header>
      <main className='Strategy__schedule'>
        <Row justifyContent='space-between' alignItems='flex-end'>
          <Row alignItems='flex-end'>
            <Input label='Resorvation:' />
            <span className='Strategy__dash'></span>
            <Input />
            <Button type='secondary' className='Strategy__test-btn'>
              Test Reservation
            </Button>
          </Row>
          <Row>
            <Stat className='Strategy__stat' value={4}>
              REC
            </Stat>
            <Stat className='Strategy__stat' value={1}>
              Hebdo
            </Stat>
          </Row>
        </Row>
      </main>
    </div>
  );
};

export default StrategyScreen;
