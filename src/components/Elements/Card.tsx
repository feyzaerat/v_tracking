import React from 'react'
import {Card, Input, Button, Row, Col, Form} from 'antd';
import DatePicker from './DatePicker';
import Selectbox from './Selectbox';




const handleSubmit = (event: { target: any; preventDefault: () => void }) => {
  event.preventDefault();
  alert('You have submitted the form.');
  console.log(event.target[0].value);
};
const Cards = () => {
  const [state, setstate] = React.useState<{ items: { id: number }[] }>({
    items: [{ id: 1 }],
  });

  const add = () => {
    let arr = [...state.items];
    if(arr.length >= 6) {
      return;
    } else {
      arr.push({id: Math.floor(Math.random()*1000)})
    }
    setstate({items: arr});
  };

  const minus  = (nowId: any) => {
    console.log('id: '+ nowId);
    let arr = [...state.items];
    let newArr = arr.filter((val) => {
      console.log('id: '+val.id)
      if(nowId === val.id) {
        return false;
      } else {
        return true;
      }
    });

    setstate({items: newArr});
  };


    return (

      <div>



        <Row gutter={24}>
          {state.items.map((tags, index)=>
               <Col span={8}>
                 <Form key={index} onSubmitCapture={handleSubmit}>

                  <div className="site-card-wrapper Card  text-center m-0-auto" >

                                         <Card className='border-0 text-center' title="New Group" bordered={true} >


                                            <Input style={{ width: 350 }} placeholder="Please Enter Group Name" /><br/>
                                            <Selectbox/><br/>
                                            <DatePicker/><DatePicker/><DatePicker/>

                                           {state.items.length === 6 ? null :
                                                <Button className=" gr-btn top-05vw" type="primary" onClick={add} style={{ width: 350 }}>+ Add New Group</Button>
                                           }

                                            <Button style={{ width: 350 }} title="Remove The Group" type="primary" danger className=' gr-btn top-05vw 'onClick={() => minus(tags.id)}>- Delete This Group</Button>
                                           <button  style={{ width: 350 }} title="Save" type="submit"  className=' btn gr-btn top-05vw  success  '>Save</button>
                                           </Card>

                                   </div>

                 </Form>
               </Col> )}
        </Row>






      </div>

    )

};

export default Cards;
