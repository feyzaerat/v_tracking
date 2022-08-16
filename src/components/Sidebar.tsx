import {Menu, MenuProps} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,HomeOutlined,UserOutlined,MenuOutlined, LogoutOutlined, LaptopOutlined, NotificationOutlined,} from '@ant-design/icons';
import React from "react";
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const Siders = () => (

    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub2']}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
    />
);

export default Siders;
