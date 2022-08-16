import React, { Component } from 'react'
import { Card,Input,Button,Row,Col  } from 'antd';
import Date_picker from './Date_picker';
import Selectbox from './Selectbox';

  class Cards extends Component {

    state = { 
      items: [
        {id: 1}
      ],
   }
  
  add = () => {
    let arr = [...this.state.items];
    if(arr.length >= 6) {
      return;
    } else {
      arr.push({id: Math.floor(Math.random()*1000)})
    }
    this.setState({items: arr})
  }
  
  minus = (nowId: any) => {
    console.log('id: '+ nowId);
    let arr = [...this.state.items];
    let newArr = arr.filter((val) => {
      console.log('id: '+val.id)
      if(nowId === val.id) {
        return false;
      } else {
        return true;
      }
    })

    this.setState({items: newArr})
  }

  render() {

    return (

      <div>

        <Row gutter={24}>
           {this.state.items.map((tags)=>
               <Col span={8}>
                  <div className="site-card-wrapper Card  text-center m-0-auto" >

                                         <Card className='border-0 text-center' title="New Group" bordered={true} >

                                            <Input style={{ width: 350 }} placeholder="Please Enter Group Name" /><br/>
                                            <Selectbox/><br/>
                                            <Date_picker/><Date_picker/><Date_picker/>
                                           {this.state.items.length > 0 ? null :

                                                 <Button className='  gr-btn top-05vw ' type="primary" onClick={this.add} style={{ width: 350 }}>+ Add New Group</Button>
                                               }

                                           {this.state.items.length === 6 ? null :
                                                <Button className=" gr-btn top-05vw" type="primary" onClick={this.add} style={{ width: 350 }}>+ Add New Group</Button>
                                           }
                                            <Button style={{ width: 350 }} title="Remove The Group" type="primary" danger className=' gr-btn top-05vw 'onClick={() => this.minus(tags.id)}>- Delete This Group</Button>
                                         </Card>

                                   </div>
               </Col>)}
        </Row>

        <div className='text-right pb-1vw'>
          <Button style={{ width: 150 }} title="Save" type="primary"  className=' gr-btn top-05vw right-1vw success '>Save</Button>
        </div>

      </div>

    )
  }
}

export default Cards;
