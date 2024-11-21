import React from 'react';
import { Outlet } from 'react-router-dom';
import Frontend from './frontend';

const Layout = () => {
    return (
      <Frontend>
        <Outlet />
      </Frontend>
    );
  };
  
  export default Layout;
