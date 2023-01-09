import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideBar/SideBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='layout-mainDiv d-flex'>
        <SideBar />
        <main className='children-Div w-100'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
