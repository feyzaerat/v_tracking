import {Breadcrumb, DatePicker} from 'antd';
import React, { Component } from 'react';

import Card from './Elements/Card';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <Breadcrumb style={{ margin: '16px'}}>
                    <Breadcrumb.Item>Vehicles</Breadcrumb.Item>
                    <Breadcrumb.Item>Groups</Breadcrumb.Item>
                    <Breadcrumb.Item>New Group</Breadcrumb.Item>
                </Breadcrumb>
                <Card/>
               
            </div>
        );
    }
}

export default Content;
