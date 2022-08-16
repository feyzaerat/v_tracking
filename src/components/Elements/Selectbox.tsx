import React, { useState } from 'react'
import {Select } from 'antd';
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
    children.push(<Select.OptGroup key={i + i}>{i}</Select.OptGroup>);
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
                  <Select.OptGroup key={index} value={option.value}>
                     {option.text}
                  </Select.OptGroup>
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
