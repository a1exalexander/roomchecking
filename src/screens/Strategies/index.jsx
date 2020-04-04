import React, { useState } from 'react';
import Row from 'components/common/Grid/Row';
import { LogoutBtn, Input, Button, Table, Badge } from 'components/common';
import './Strategies.scss';

export const StrategiesScreen = () => {
  const [hotelInfo, setHotelInfo] = useState({
    hotelName: '',
    email: '',
    name: '',
    phone: '',
  });

  const onHotelInfoChange = (type) => (value) => {
    setHotelInfo((prevState) => ({ ...prevState, [type]: value }));
  };

  return (
    <main className='Strategies'>
      <Row justifyContent='flex-end' className='Strategies__head'>
        <LogoutBtn className='Strategies__logout-btn' />
      </Row>
      <Row justifyContent='space-between' className='Strategies__hotel-info'>
        <Row className='Strategies__inputs' alignItems='flex-end' grow={1}>
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
      <Table>
        <thead>
          <tr>
            <th className='Strategies__name-cell'>rule name</th>
            <th className='Strategies__date-cell'>last change</th>
            <th>cleaning strategies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='Strategies__name-cell'>Rule 1</td>
            <td className='Strategies__date-cell'><span className='Strategies__date'>10/12/2019 18:00</span></td>
            <td>
              <Badge className='Strategies__badge'>REC</Badge>
              <Badge className='Strategies__badge'>Hebdo</Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
};

export default StrategiesScreen;
