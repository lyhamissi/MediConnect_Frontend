import React, { useState } from 'react';
import '../dashboardstyles/sidebar.css';
import { Link } from 'react-router-dom';
import { SiEventstore } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaHeartbeat, FaCalendarCheck, FaFileInvoiceDollar, FaUserNurse } from "react-icons/fa";
import { FaUserDoctor, FaBedPulse } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdDashboard, MdDonutSmall, MdArrowDropDown, MdArrowRight } from "react-icons/md";

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isDoctorsMenuOpen, setIsDoctorsMenuOpen] = useState(false);
    const [isPatientsMenuOpen, setIsPatientsMenuOpen] = useState(false);
    const [isEventMenuOpen, setIsEventMenuOpen] = useState(false);
    const [isBillMenuOpen, setIsBillMenuOpen] = useState(false);
    const [isNursesMenuOpen, setIsNursesMenuOpen] = useState(false);

    return (
        <div className="dashboard">
            <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
                <div className="topbar">
                    <h3 className='side'>MediConnect</h3>
                    <button className="toggle-btn" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                        <IoMdMenu />
                    </button>
                </div>
                <ul>
                    <Link to="/dashboard" className='nav-link'><li><MdDashboard className='nav-icon' /> Dashboard</li></Link>
                    <Link to="/patient-dashboard" className='nav-link'><li><FaHeartbeat className='nav-icon' /> Patient Dashboard</li></Link>
                    <Link to="/doctor-dashboard" className='nav-link'><li><MdDonutSmall className='nav-icon' /> Doctor Dashboard</li></Link>

                    <li onClick={() => setIsDoctorsMenuOpen(!isDoctorsMenuOpen)}>
                        <FaUserDoctor className='nav-icon' /> Doctors
                        {isDoctorsMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    {isDoctorsMenuOpen && (
                        <ul className="submenu">
                            <Link to="/all-doctors" className='nav-link'><li>All Doctors</li></Link>
                            <Link to="/add-doctor" className='nav-link'><li>Add Doctor</li></Link>
                            <Link to="/doctor-view" className='nav-link'><li>Edit Doctor</li></Link>
                            {/* <Link to="/doctor-profile" className='nav-link'><li>Doctor Profile</li></Link> */}
                        </ul>
                    )}
                    <li onClick={() => setIsPatientsMenuOpen(!isPatientsMenuOpen)}>
                        <FaBedPulse className='nav-icon' /> Patients
                        {isPatientsMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    {isPatientsMenuOpen && (
                        <ul className="submenu">
                            <Link to="/all-patients" className='nav-link'><li>All Patients</li></Link>
                            {/* <Link to="/add-patient" className='nav-link'><li>Add Patient</li></Link> */}
                            {/* <Link to="/edit-patient" className='nav-link'><li>Edit Patient</li></Link> */}
                            <Link to="/dashboard/patient-pro" className='nav-link'><li>Patient Profile</li></Link>
                        </ul>
                    )}
                    <li onClick={() => setIsNursesMenuOpen(!isNursesMenuOpen)}>
                        <FaUserNurse className='nav-icon' /> Nurses
                        {isNursesMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    {isNursesMenuOpen && (
                        <ul className="submenu">
                            <Link to="/all-nurses" className='nav-link'><li>All Nurses</li></Link>
                            <Link to="/add-nurse" className='nav-link'><li>Add Nurse</li></Link>
                            <Link to="/nurse-doctor" className='nav-link'><li>Edit Nurse</li></Link>
                            <Link to="/nurse-profile" className='nav-link'><li>Nurse Profile</li></Link>
                        </ul>
                    )}
                    <li onClick={() => setIsEventMenuOpen(!isEventMenuOpen)}>
                        <FaCalendarCheck className='nav-icon' /> Appointment
                        {isEventMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    {isEventMenuOpen && (
                        <ul className="submenu">
                            <Link to="/schedule" className='nav-link'><li>Doctor Schedule</li></Link>
                            <Link to="/appointment" className='nav-link'><li>Booked Appointments</li></Link>
                        </ul>
                    )}
                    <li onClick={() => setIsBillMenuOpen(!isBillMenuOpen)}>
                        <FaFileInvoiceDollar className='nav-icon' /> Billing
                        {isBillMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    {isBillMenuOpen && (
                        <ul className="submenu">
                            <Link to="/all-patients" className='nav-link'><li>Payments</li></Link>
                            <Link to="/add-patient" className='nav-link'><li>Add Payment</li></Link>
                            <Link to="/edit-patient" className='nav-link'><li>Patient Invoice</li></Link>
                        </ul>
                    )}
                    <Link to="/events" className='nav-link'><li><SiEventstore className='nav-icon' /> Event Management</li></Link>
                    <Link to="/support" className='nav-link'><li><BiSupport className='nav-icon' /> Support</li></Link>
                </ul>
            </div>
            {!isSidebarVisible && (
                <button className="show-btn" onClick={() => setIsSidebarVisible(true)}>
                    <IoMdMenu />
                </button>
            )}
        </div>
    );
}

export default Sidebar;
