import React, { Component, useState } from 'react'
import { DatePicker, Select, Space, TimePicker } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

const { Option} = Select;
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const children: React.ReactNode[] = [];
for (let i = 1; i < 11; i++) {
    children.push(<Option key={i + i}>{i}</Option>);
}

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


const Selectboxes: React.FC = () => {

    const [size, setSize] = useState<SizeType>('middle');

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

         <Select showSearch placeholder="Departure Counts" size={size} className={"top-1vw w-35"} onChange={handleChange} style={{ width: 175}}>
             {children}
         </Select>

         <Select showSearch placeholder="Departure Counts" size={size} className={"top-1vw w-35"} onChange={handleChange} style={{ width: 175}}>
             {children}
         </Select>

      <br />
    </>
    
  );


};

export default Selectboxes;
