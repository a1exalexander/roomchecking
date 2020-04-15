import React, { useState } from 'react';
import cx from 'classnames';
import DevextremeScheduler, { View } from 'devextreme-react/scheduler';
import 'theme/custom/scheduler.css';
import 'theme/custom/scheduler-light-theme.css';
import './Scheduler.scss';
import { data } from './data';
import { Row, Button, Stat, Col, Badge } from 'components';
import { DatePicker } from 'antd';
import moment from 'moment';
import { ReactComponent as IconLeft } from 'assets/svg/ArrowLeft.svg';
import { ReactComponent as IconRight } from 'assets/svg/ArrowRight.svg';

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
  const [period, setPeriod] = useState(new Date());

  const onChangeInterval = (dates) => {
    setDateInterval(dates);
    setPeriod(dates[0]);
  };
  const onClickPrev = () => {
    const prev = moment(period).subtract(1, 'M');
    setPeriod(prev);
  };
  const onClickNext = () => {
    const next = moment(period).add(1, 'M');
    setPeriod(next);
  };
  const renderDateCell = (cellData) => (
    <div className='Scheduler__weekname'>
      {dayOfWeekNames[cellData.date.getDay()]}
    </div>
  );
  const renderCollector = ({ appointmentCount }) => {
    return (
      <Badge color='blue' size='small' className='Scheduler__collector'>
        {appointmentCount}
      </Badge>
    );
  };
  const renderAppointment = ({
    appointmentData: { type, text, startDate, endDate },
  }) => {
    const color = type === 'common' ? 'green' : 'grey';
    return (
      <Badge fill ellipsis fluid color={color}>
        {text}
      </Badge>
    );
  };
  return (
    <div className='Scheduler'>
      <Row
        justifyContent='space-between'
        alignItems='flex-end'
        className='Scheduler__header'
      >
        <Row alignItems='flex-end'>
          <Row className='Scheduler__period' alignItems='center'>
            <span className='Scheduler__current-date'>
              {moment(period).format('MMMM YYYY')}
            </span>
            <Row>
              <button onClick={onClickPrev} className='Scheduler__arrow-btn'>
                <IconLeft className='Scheduler__arrow-icon' />
              </button>
              <button onClick={onClickNext} className='Scheduler__arrow-btn'>
                <IconRight className='Scheduler__arrow-icon Scheduler__arrow-icon--right' />
              </button>
            </Row>
          </Row>
          <Col>
            <span className='Strategy__input-label'>Resorvation:</span>
            <RangePicker
              value={dateInterval}
              separator='-'
              onChange={onChangeInterval}
            />
          </Col>
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
        appointmentRender={renderAppointment}
        appointmentCollectorRender={renderCollector}
        className={cx('Scheduler__scheduler')}
        dataSource={data}
        currentDate={period}
        showAllDayPanel={false}
        shadeUntilCurrentTime={true}
        showCurrentTimeIndicator={true}
        defaultCurrentView='month'
        defaultCurrentDate={currentDate}
        maxAppointmentsPerCell={1}
        height={500}
      >
        <View type='month' dateCellRender={renderDateCell} />
      </DevextremeScheduler>
    </div>
  );
};

export default Scheduler;
