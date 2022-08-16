import React, { useState } from 'react';
import { Layout, Menu  } from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';


import './css/App.css';
import './css/layout.css';
import './css/footer.css';
import Headers from './components/Header';
import Sidebar from './components/Sidebar';
import Contents from './components/Content';
import Footers from './components/Footer';
const { Header, Footer, Sider, Content } = Layout;


const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <Sidebar />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <Headers/>
                </Header>
                <Content className="site-layout-background" style={{margin: '24px 16px', padding: 24, minHeight: 280,}}>
                  <Contents />
                </Content>
                <Footer>
                 <Footers />
                </Footer>
            </Layout>
        </Layout>
        </>
    );

}

export default App;
