import React from 'react'
import { Outlet } from 'react-router-dom';
import NurseSidebar from './NurseSidebar';
import NurseNavbar from './NurseNavbar';
const NurseLayout = () => {
  return (
    <div className="dashboard">
        <NurseSidebar/>
            <div className="main-container">
                <NurseNavbar/>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
  )
}

export default NurseLayout
