import React, { useState } from 'react';
import Row from 'components/common/Grid/Row';
import { LogoutBtn, Input, Button, Table, Badge } from 'components/common';
import './Strategy.scss';
import Subtle from 'components/common/Subtle';
import { ReactComponent as IconPlus } from 'assets/svg/Plus.svg';
import { ReactComponent as IconActions } from 'assets/svg/Actions.svg';
import { ReactComponent as IconTrash } from 'assets/svg/Trash.svg';
import { ReactComponent as IconCopy } from 'assets/svg/Copy.svg';
import Popover from 'components/common/Popover';
import PopoverButton from 'components/common/Popover/Button';
import Popup from 'components/common/Popup';
import { routePath } from 'router/const';

export const StrategyScreen = () => {
  const [ruleInfo, setRuleInfo] = useState({
    ruleName: '',
    comment: '',
  });
  const [visiblePopup, setVisiblePopup] = useState(false);

  const onRuleInfoChange = (type) => (value) => {
    setRuleInfo((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <main className='Strategy'>
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
        <Subtle link to={routePath.STRATEGIES}>
          Back to Rules List
        </Subtle>
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
      <Table className='Strategy__table'>
        <thead>
          <tr>
            <th>cleaning strategies</th>
            <th>source</th>
            <th>period</th>
            <th>comment</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((i) => (
            <tr key={i}>
              <td>
                <Row>
                  <Badge fluid>REC</Badge>
                </Row>
              </td>
              <td>PMS: Tag</td>
              <td>Daily Cleaning</td>
              <td>
                <Row justifyContent='space-between'>
                  <span>Lorem ipsum dolor sit amet.</span>
                  <div>
                    <button>1</button>
                    <button>2</button>
                  </div>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Subtle Icon={IconPlus} link to={`${routePath.STRATEGY}/new`}>
        Add New Cleaning Strategy
      </Subtle>
    </main>
  );
};

export default StrategyScreen;
