import React, { Component } from 'react';
import { Breadcrumb, Layout, Menu  } from 'antd';
import type { MenuProps } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,HomeOutlined,UserOutlined,MenuOutlined, LogoutOutlined, LaptopOutlined, NotificationOutlined,} from '@ant-design/icons';

import './App.css';
import Headers from './components/Header';
import Sidebar from './components/Sidebar';
import Contents from './components/Content';
import Footers from './components/Footer';
const { Header, Footer, Sider, Content } = Layout;


const App = () => {

    return (
        <>
        <Layout>
          <Header className="header">
            <Headers />
          </Header>
            <Layout>

              <Sider width={200} className="site-layout-background">
               <Sidebar />
              </Sider>
              <Layout>

                <Content className="site-layout-background" >
                 <Contents />
                </Content>
            <Footer>
              <Footers />
            </Footer>
          </Layout>
             </Layout>
        </Layout>
        </>
    );

}

export default App;
