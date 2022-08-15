import React, { Component, useState } from 'react'
import { Card,Input,Button  } from 'antd';
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
    if(arr.length >= 4) {
      return;
    } else {
      arr.push({id: Math.floor(Math.random()*1000)})
    }
    this.setState({items: arr})
  }
  
  minus = (nowId) => {
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
      <div className='site-card-border-less-wrapper'>
         <React.Fragment>
           {this.state.items.map((tags)=>
                                 <React.Fragment>

                                     {this.state.items.length > 0 ? null :
                                         <Button className=' add-btn gr-btn ' type="primary" onClick={this.add} style={{ width: 250 }}>+ Add New Group</Button>}

                                         <Card className='Card left-2vw' title="Card title" bordered={true} style={{ width: 400 }}>
                                            <Input style={{ width: 350 }} placeholder="Please Enter Group Name" /><br/>
                                            <Selectbox/><br/>
                                            <Date_picker/><Date_picker/><Date_picker/>
                                            <Button style={{ width: 350 }} title="Remove The Group" type="primary" danger className=' gr-btn top-05vw 'onClick={() => this.minus(tags.id)}>- Delete This Group</Button>
                                         </Card>

                                 </React.Fragment>
           )}
         
           {this.state.items.length === 4 ? null :
               <Button className="add-btn gr-btn" type="primary" onClick={this.add} style={{ width: 250 }}>+ Add New Group</Button>
           }

        </React.Fragment>

      </div>
    )
  }
}

export default Cards;
