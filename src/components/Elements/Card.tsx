import React, { Component, useState } from 'react';
import { Card, Input, Button } from 'antd';
import DatePicker from './Date_picker';
import Selectbox from './Selectbox';

class Cards extends Component {
  state = {
    items: [{ id: 1 }, { id: 2 }],
  };

  add = () => {
    let arr = [...this.state.items];
    if (arr.length >= 4) {
      return;
    } else {
      arr.push({ id: Math.floor(Math.random() * 1000) });
    }
    this.setState({ items: arr });
  };

  minus = (nowId: any) => {
    console.log('id: ' + nowId);
    let arr = [...this.state.items];
    let newArr = arr.filter((val) => {
      console.log('id: ' + val.id);
      if (nowId === val.id) {
        return false;
      } else {
        return true;
      }
    });

    this.setState({ items: newArr });
  };

  render() {
    return (
      <div className='site-card-border-less-wrapper'>
        <React.Fragment>
          <Card
            className='Card left-2vw'
            title='Card title'
            bordered={true}
            style={{ width: 700 }}>
            <div className='sec'>
              {this.state.items.length > 0 ? null : (
                <Button
                  className=' gr-btn'
                  type='primary'
                  onClick={this.add}
                  style={{ width: 250 }}>
                  + Add New Group
                </Button>
              )}
            </div>

            {this.state.items.map((tags) => (
              <React.Fragment>
                <div className='itemParent'>
                  <div className='itemStyle top-1-25vw'>
                    <Input
                      style={{ width: 350 }}
                      placeholder='Please Enter Group Name'
                    />
                    　
                  </div>
                  <Button
                    style={{ width: 350 }}
                    title='Remove The Group'
                    type='primary'
                    danger
                    className=' gr-btn top-05vw '
                    onClick={() => this.minus(tags.id)}>
                    - Delete This Group
                  </Button>
                </div>
              </React.Fragment>
            ))}

            {this.state.items.length === 4 ||
            this.state.items.length === 0 ? null : (
              <Button
                className='gr-btn'
                type='primary'
                onClick={this.add}
                style={{ width: 250 }}>
                + Add New Group
              </Button>
            )}
          </Card>
        </React.Fragment>
        Butonlar Card ekleyecek sekilde düzenlenecek
        <Card
          className='Card left-2vw'
          title='Card title'
          bordered={true}
          style={{ width: 400 }}>
          <Input style={{ width: 350 }} placeholder='Please Enter Group Name' />
          <Selectbox />
          <br />
          <DatePicker />
          <DatePicker />
          <DatePicker />
          <br />

          <Button
            style={{ width: 350 }}
            title='Add New Group'
            type='primary'
            className='gr-btn top-2vw'>
            + Add New Group
          </Button>
          <Button
            href='{new-group}'
            style={{ width: 350 }}
            title='Remove The Group'
            type='primary'
            danger
            className=' gr-btn top-05vw '>
            - Delete This Group
          </Button>

          <Button
            style={{ width: 350 }}
            title='Save'
            type='primary'
            className=' gr-btn top-05vw  success '>
            Save
          </Button>
        </Card>
      </div>
    );
  }
}

export default Cards;
