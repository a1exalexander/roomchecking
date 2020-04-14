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
  Container,
} from 'components/common';
import './Strategy.scss';
import { ReactComponent as IconPlus } from 'assets/svg/Plus.svg';
import { ReactComponent as IconTrash } from 'assets/svg/Trash.svg';
import { ReactComponent as IconEdit } from 'assets/svg/edit.svg';
import { routePath } from 'router';
import { EditStrategy } from './components/EditStrategy';
import { Scheduler } from './components/Scheduler';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { has, isBoolean, isString } from 'utils';
import { v4 as uuid } from 'uuid';

const initStrategy = {
  name: '',
  source: '',
  period: '',
  comment: '',
};

export const StrategyScreen = () => {
  const [ruleInfo, setRuleInfo] = useState({
    ruleName: '',
    comment: '',
  });
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [editStrategyVisible, setEditStrategyVisible] = useState(false);
  const [strategies, setStrategies] = useState([]);
  const [strategy, setStrategy] = useState({ ...initStrategy });

  const onRuleInfoChange = (type) => (value) => {
    if (has(strategy, type)) {
      setRuleInfo((prevState) => ({ ...prevState, [type]: value }));
    }
  };

  const onChangeStrategy = (key) => (value) => {
    setStrategy((prevState) => ({ ...prevState, [key]: value }));
  };

  const cleanStratery = () => {
    setStrategy({ ...initStrategy });
  };

  const closeEditStrategy = () => setEditStrategyVisible(false);

  const onAddNewStrategy = () => {
    setStrategy({ ...initStrategy });
    setEditStrategyVisible(true);
  };

  const addNewStrategy = () => {
    setStrategies((prevState) => [...prevState, { ...strategy, id: uuid() }]);
    closeEditStrategy();
    cleanStratery();
  };

  const removeStrategy = (id) => {
    const shallowCopy = [...strategies];
    const idx = shallowCopy.findIndex((item) => item.id === id);
    shallowCopy.splice(idx, 1);
    setStrategies([...shallowCopy]);
  };

  const editStrategy = (id) => {
    const item = strategies.find((item) => item.id === id);
    setStrategy((prevState) => ({ ...prevState, ...item }));
    setEditStrategyVisible(id);
  };

  const saveStrategy = (id) => {
    const shallowCopy = [...strategies];
    const idx = shallowCopy.findIndex((item) => item.id === id);
    shallowCopy.splice(idx, 1, { ...strategy, id });
    setStrategies([...shallowCopy]);
    closeEditStrategy();
    cleanStratery();
  };

  const isNewStrategyVisible =
    isBoolean(editStrategyVisible) && editStrategyVisible;

  return (
    <div className='Strategy'>
      <Container className='Strategy__header'>
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
        <Table className={cx('Strategy__table')}>
          <thead>
            <tr>
              <th>cleaning strategies</th>
              <th>source</th>
              <th>period</th>
              <th>comment</th>
            </tr>
          </thead>

          {strategies.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <Badge fluid={true}>{item.name}</Badge>
                </td>
                <td>{item.source}</td>
                <td>{item.period}</td>
                <td>
                  <Row justifyContent='space-between'>
                    <span>{item.comment}</span>
                    <Row>
                      <IconButton
                        onClick={() => editStrategy(item.id)}
                        className='Strategy__action-button'
                      >
                        <IconEdit />
                      </IconButton>
                      <IconButton
                        onClick={() => removeStrategy(item.id)}
                        className='Strategy__action-button'
                      >
                        <IconTrash />
                      </IconButton>
                    </Row>
                  </Row>
                </td>
              </tr>
              <CSSTransition
                in={
                  isString(editStrategyVisible) &&
                  editStrategyVisible === item.id
                }
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
                    <EditStrategy
                      name={strategy.name}
                      source={strategy.source}
                      period={strategy.period}
                      comment={strategy.comment}
                      onChangeName={onChangeStrategy('name')}
                      onChangeSource={({ value }) =>
                        onChangeStrategy('source')(value)
                      }
                      onChangePeriod={({ value }) =>
                        onChangeStrategy('period')(value)
                      }
                      onChangeComment={onChangeStrategy('comment')}
                      onSubmit={() => saveStrategy(item.id)}
                      onClose={closeEditStrategy}
                    />
                  </td>
                </tr>
              </CSSTransition>
            </tbody>
          ))}
        </Table>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            className={cx('animated faster', {
              'Strategy__add-btn': !isNewStrategyVisible,
            })}
            timeout={200}
            classNames={{
              enterActive: 'pullDown',
              exitActive: 'fadeOutUp',
            }}
            key={isNewStrategyVisible ? 'new-strategy' : 'button'}
          >
            {isNewStrategyVisible ? (
              <EditStrategy
                isNew
                key='new-strategy'
                name={strategy.name}
                source={strategy.source}
                period={strategy.period}
                comment={strategy.comment}
                onChangeName={onChangeStrategy('name')}
                onChangeSource={({ value }) =>
                  onChangeStrategy('source')(value)
                }
                onChangePeriod={({ value }) =>
                  onChangeStrategy('period')(value)
                }
                onChangeComment={onChangeStrategy('comment')}
                onSubmit={addNewStrategy}
                onClose={closeEditStrategy}
              />
            ) : (
              <Subtle key='button' Icon={IconPlus} onClick={onAddNewStrategy}>
                Add New Cleaning Strategy
              </Subtle>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
      <Container className='Strategy__scheduler'>
        <Scheduler />
      </Container>
    </div>
  );
};

export default StrategyScreen;
