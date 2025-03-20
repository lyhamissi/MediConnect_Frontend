import React from 'react'
import { Outlet } from 'react-router-dom';
import Doctorsidebar from './Doctorsidebar';
import DoctorNavbar from './DoctorNavbar';
const DoctorLayout = () => {
  return (
    <div>
       <div className="dashboard">
        <Doctorsidebar/>
            <div className="main-container">
                <DoctorNavbar/>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorLayout
