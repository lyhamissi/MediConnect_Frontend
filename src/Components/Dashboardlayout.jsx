import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
const Dashboardlayout = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-container">
                <Navbar />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Dashboardlayout
