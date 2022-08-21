import React, { Component } from 'react';
import { Card, Input, Button, Row, Col, Form } from 'antd';
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

  //Her state işleminde tekrar function oluşturulmasını useCallback ile engelliyoruz
  const add = React.useCallback(() => {
    let arr = [...state.items];
    if (arr.length >= 6) {
      return;
    } else {
      arr.push({ id: Math.floor(Math.random() * 1000) });
    }
    setstate({ items: arr });
  }, []);

  const minus = React.useCallback((nowId: any) => {
    console.log('id: ' + nowId);
    let arr = [...state.items];
    let newArr = arr.filter((val) => {
      console.log('id: ' + val.id);
      if (nowId === val.id) {
        return false;
      } else {
        return true;
      }
    });

    setstate({ items: newArr });
  }, []);

  return (
    <div>
      {state.items.map((tags, index) => (
        <Form key={index} onSubmitCapture={handleSubmit}>
          <Row gutter={24}>
            <Col span={8}>
              <div className='site-card-wrapper Card  text-center m-0-auto'>
                <Card
                  className='border-0 text-center'
                  title='New Group'
                  bordered={true}>
                  <Input
                    style={{ width: 350 }}
                    placeholder='Please Enter Group Name'
                  />
                  <br />
                  <Selectbox />
                  <br />
                  <DatePicker />
                  <DatePicker />
                  <DatePicker />
                  {state.items.length > 0 ? null : (
                    <Button
                      className='  gr-btn top-05vw '
                      type='primary'
                      onClick={add}
                      style={{ width: 350 }}>
                      + Add New Group
                    </Button>
                  )}

                  {state.items.length === 6 ? null : (
                    <Button
                      className=' gr-btn top-05vw'
                      type='primary'
                      onClick={add}
                      style={{ width: 350 }}>
                      + Add New Group
                    </Button>
                  )}
                  <Button
                    style={{ width: 350 }}
                    title='Remove The Group'
                    type='primary'
                    danger
                    className=' gr-btn top-05vw '
                    onClick={() => minus(tags.id)}>
                    - Delete This Group
                  </Button>
                </Card>
              </div>
            </Col>
          </Row>

          <div className='text-right pb-1vw'>
            <button
              style={{ width: 150 }}
              title='Save'
              type='submit'
              className=' btn gr-btn top-05vw right-1vw success float-right '>
              Save
            </button>
          </div>
        </Form>
      ))}
    </div>
  );
};

export default Cards;
