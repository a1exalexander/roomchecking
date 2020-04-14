import React, { useState } from 'react';
import Row from 'components/common/Grid/Row';
import {
  LogoutBtn,
  Input,
  Button,
  Table,
  Badge,
  Container,
} from 'components/common';
import './Strategies.scss';
import Subtle from 'components/common/Subtle';
import { ReactComponent as IconPlus } from 'assets/svg/Plus.svg';
import { ReactComponent as IconActions } from 'assets/svg/Actions.svg';
import { ReactComponent as IconTrash } from 'assets/svg/Trash.svg';
import { ReactComponent as IconCopy } from 'assets/svg/Copy.svg';
import { Popover, PopoverButton, Popup } from 'components';
import { routePath } from 'router/const';

export const StrategiesScreen = () => {
  const [hotelInfo, setHotelInfo] = useState({
    hotelName: '',
    email: '',
    name: '',
    phone: '',
  });
  const [visiblePopup, setVisiblePopup] = useState(false);

  const onHotelInfoChange = (type) => (value) => {
    setHotelInfo((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <Container className='Strategies'>
      <Popup
        visible={visiblePopup}
        onClose={() => setVisiblePopup(false)}
        title='Remove Rule'
        dangerButton='Remove'
        primaryButton={false}
      >
        Are you sure you want to remove this rule?
      </Popup>
      <Row justifyContent='flex-end' className='Strategies__head'>
        <LogoutBtn className='Strategies__logout-btn' />
      </Row>
      <Row justifyContent='space-between' className='Strategies__hotel-info'>
        <Row className='Strategies__inputs' alignItems='flex-end'>
          <Input
            label='Hotel Name'
            value={hotelInfo.hotelName}
            onChange={onHotelInfoChange('hotelName')}
            className='Strategies__input'
          />
          <Input
            label='Email'
            value={hotelInfo.email}
            type='email'
            onChange={onHotelInfoChange('email')}
            className='Strategies__input'
          />
          <Input
            label='Name'
            value={hotelInfo.name}
            onChange={onHotelInfoChange('name')}
            className='Strategies__input'
          />
          <Input
            label='Phone Number'
            type='tel'
            value={hotelInfo.phone}
            onChange={onHotelInfoChange('phone')}
            className='Strategies__input'
          />
        </Row>
        <Row alignItems='flex-end'>
          <Button type='secondary' className='Strategies__cancel-btn'>
            Cancel
          </Button>
          <Button>Save</Button>
        </Row>
      </Row>
      <Table className='Strategies__table'>
        <thead>
          <tr>
            <th className='Strategies__name-cell'>rule name</th>
            <th className='Strategies__date-cell'>last change</th>
            <th>cleaning strategies</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((i) => (
            <tr key={i}>
              <td className='Strategies__name-cell'>
                <Subtle>Rule {i}</Subtle>
              </td>
              <td className='Strategies__date-cell'>
                <span className='Strategies__date'>10/12/2019 18:00</span>
              </td>
              <td>
                <Row justifyContent='space-between'>
                  <Row>
                    <Badge className='Strategies__badge'>REC</Badge>
                    <Badge className='Strategies__badge'>Hebdo</Badge>
                  </Row>
                  <Popover
                    className='Strategies__popover'
                    position='bottom-right'
                    Target={() => (
                      <IconActions className='Strategies__actions-icon' />
                    )}
                  >
                    <div>
                      <PopoverButton
                        className='Strategies__popover-link'
                        Icon={IconCopy}
                      >
                        Dublicate
                      </PopoverButton>
                      <PopoverButton
                        className='Strategies__popover-link'
                        Icon={IconTrash}
                        onClick={() => setVisiblePopup(true)}
                      >
                        Remove
                      </PopoverButton>
                    </div>
                  </Popover>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Subtle Icon={IconPlus} link to={`${routePath.STRATEGY}/new`}>
        Add New Rule
      </Subtle>
    </Container>
  );
};

export default StrategiesScreen;
