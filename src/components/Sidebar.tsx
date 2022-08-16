import {Menu} from 'antd';
import React from "react";
import {HomeOutlined, UserOutlined, ClockCircleOutlined, LogoutOutlined} from '@ant-design/icons';

const Siders = () => {
    return(
        <>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['2']}
                items={[
                    {
                        key: '1',
                        icon: <HomeOutlined />,
                        label: 'Home',
                    },
                    {
                        key: '2',
                        icon: <ClockCircleOutlined />,
                        label: 'Vehicles',
                    },
                    {
                        key: '3',
                        icon: <LogoutOutlined />,
                        label: 'Logout',
                    },
                ]}
            />

        </>

    );


}


export default Siders;
