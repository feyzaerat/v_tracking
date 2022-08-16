import React, { Component } from 'react';
import {Menu, MenuProps} from "antd";
const items1: MenuProps['items'] = ['1', '2', '3', '4', '5'].map(key => ({
  key,
  label: `nav ${key}`,
}));

class Header extends Component {
  render() {
    return (
      <div>
        <span><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
        </span> </div>
    );
  }
}

export default Header;
