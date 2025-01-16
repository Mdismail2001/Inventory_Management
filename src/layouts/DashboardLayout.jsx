import React from 'react';
import Navbar from '../partials/NavBar';
import SideBar from '../partials/SideBar';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import { useState } from 'react';

const DashboardLayout = () => {

    const token = localStorage.getItem("token");

    if (!token) return <Navigate to = {'/login'}/>


    const [isNavOpen, setIsNavOpen] = useState(true);


    const handelNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    }   

    return (
        <>
            <Navbar navOperation={handelNavOpen} />
            <div id="sideNavRef" className = {isNavOpen ? "side-nav-open" : "side-nav-close"}>
                <SideBar />
            </div>

            <div id="contentRef" className= {isNavOpen ? "content" : "content-expand"}>
                <Outlet />
            </div>

        </>
    );
};

export default DashboardLayout;