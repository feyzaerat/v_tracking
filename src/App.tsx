import React, { Component } from 'react';
import { Layout } from 'antd';

import './App.css';
import Headers from './components/Header';
import Sidebar from './components/Sidebar';
import Contents from './components/Content';
import Footers from './components/Footer';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout className='Layout'>
          <Sider>
            <Sidebar />
          </Sider>
          <Layout>
            <Header>
              <Headers />
            </Header>

            <Content>
              <Contents />
            </Content>
            <Footer>
              <Footers />
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
