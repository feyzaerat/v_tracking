import React, { useState } from 'react';
import logo from '../img/female.png';


const Header: React.FC = () =>  {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <>
          <ul className="flex-right">
              <li><a><img src={logo} width="32" height="32"/></a></li>
          </ul>
      </>
    );

}

export default Header;
