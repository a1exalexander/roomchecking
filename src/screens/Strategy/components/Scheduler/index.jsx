import React, { useState } from 'react';
import cx from 'classnames';
import DevextremeScheduler, { View } from 'devextreme-react/scheduler';
import 'theme/custom/scheduler.css';
import 'theme/custom/scheduler-light-theme.css';
import './Scheduler.scss';
import { data } from './data';
import { Row, Button, Stat } from 'components';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const currentDate = new Date();
const dayOfWeekNames = [
  'Sunday',
  'Monday',
  'Tueday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const Scheduler = () => {
  const [dateInterval, setDateInterval] = useState([null, null]);
  const onChangeInterval = (dates) => {
    setDateInterval(dates);
  };
  const renderDateCell = (cellData) => (
    <div className='Scheduler__weekname'>{dayOfWeekNames[cellData.date.getDay()]}</div>
  );
  return (
    <div className='Scheduler'>
      <Row
        justifyContent='space-between'
        alignItems='flex-end'
        className='Scheduler__header'
      >
        <Row alignItems='flex-end'>
          <RangePicker value={dateInterval} onChange={onChangeInterval} />
          <Button type='secondary' className='Scheduler__test-btn'>
            Test Reservation
          </Button>
        </Row>
        <Row>
          <Stat className='Scheduler__stat' value={4}>
            REC
          </Stat>
          <Stat className='Scheduler__stat' value={1}>
            Hebdo
          </Stat>
        </Row>
      </Row>
      <DevextremeScheduler
        className={cx('Scheduler__scheduler')}
        dataSource={data}
        currentDate={dateInterval[0] || new Date()}
        showAllDayPanel={false}
        showCurrentTimeIndicator={true}
        defaultCurrentView='month'
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}
      >
        <View type='month' dateCellRender={renderDateCell} />
      </DevextremeScheduler>
    </div>
  );
};

export default Scheduler;
