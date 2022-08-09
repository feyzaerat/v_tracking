import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,HomeOutlined,UserOutlined,MenuOutlined, LogoutOutlined} from '@ant-design/icons';

const Navbar = () => (

     <Menu mode="horizontal" defaultSelectedKeys={['home']}>

     <Menu.SubMenu key="SubMenu"  icon={<MenuOutlined />}>
      <Menu.Item key="two" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="three" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    
     </Menu.SubMenu>
     <Menu.Item key="home" icon={<HomeOutlined />}>
      Home
     </Menu.Item>
   
  </Menu>
);

export default Navbar;
