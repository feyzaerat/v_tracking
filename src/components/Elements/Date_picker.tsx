import React, { Component, useState } from 'react'
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, TimePicker, Row, Col, Input } from 'antd';

import moment from 'moment';

const format = 'HH:mm';

const Time_picker: React.FC = () => 

<TimePicker style={{ width: 107 }} className="right-05vw" defaultValue={moment('12:05', format)} format={format} minuteStep={5} />;

 



export default Time_picker;
