import React from 'react';
import { TimePicker } from 'antd';

import moment from 'moment';

const format = 'HH:mm';

const Time_picker: React.FC = () => (
  <TimePicker
    style={{ width: 107 }}
    className='right-05vw'
    defaultValue={moment('06:05', format)}
    format={format}
    minuteStep={5}
  />
);

export default Time_picker;
