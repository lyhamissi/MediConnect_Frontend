import React from 'react'
import { Outlet } from 'react-router-dom';
import Patientsidebar from './Patientsidebar';
import PatientNavbar from './PatientNavbar';

const PatientLayout = () => {
  return (
    <div className="dashboard">
        <Patientsidebar/>
            <div className="main-container">
                <PatientNavbar/>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
  )
}

export default PatientLayout
