import React, { Component, useState } from 'react'
import { DatePickerProps, Row, Col, TimePickerProps,Button, Input } from 'antd';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import { PlusOutlined, CloseOutlined} from '@ant-design/icons';


const { Option} = Select;
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const children: React.ReactNode[] = [];

const days = [
  {value: 'Monday', text: 'Monday'},
  {value: 'Tuesday', text: 'Tuesday'},
  {value: 'Wednesday', text: 'Wednesday'},
  {value: 'Thursday', text: 'Thursday'},
  {value: 'Friday', text: 'Friday'},
  {value: 'Saturday', text: 'Saturday'},
  {value: 'Sunday', text: 'Sunday'},
]


const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};


const Selectbox: React.FC = () => {

  return (
     <>
      
        
           <Select
            style={{ width: 350 }}
            mode="multiple"
            allowClear
            placeholder="Please select Days"
            onChange={handleChange}
            className='top-1vw left-1vw '>
               {days.map((option, index) => (
                  <option key={index} value={option.value}>
                     {option.text}
                  </option>
               ))}
           </Select><br/>

           <Select
             showSearch
             style={{ width: 175 }}
             placeholder="select the count of vehicles"
             optionFilterProp="children"
             onChange={onChange}
             onSearch={onSearch}
             className="top-1vw w-35"
             filterOption={(input, option) =>
               (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
             }
           >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>

           </Select>

           <Select
             showSearch
             style={{ width: 175 }}
             placeholder="Select Minute Interval."
             optionFilterProp="children"
             onChange={onChange}
             onSearch={onSearch}
             className="top-1vw w-35"
             filterOption={(input, option) =>
               (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
             }
           >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>

           </Select>
      
       
           
           
       
      
       
    
      <br />
    </>
    
  );


};

export default Selectbox;
