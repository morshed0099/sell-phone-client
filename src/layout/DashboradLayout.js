import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardHeader from '../Shered/DashBoardHeader';
import Footer from '../Shered/Footer/Footer';
import Header from '../Shered/Header/Header';

const DashboradLayout = () => {
    return (
        <div>            
            <DashBoardHeader></DashBoardHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboradLayout;