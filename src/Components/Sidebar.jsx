import React, { useState } from 'react';
import '../dashboardstyles/sidebar.css';
import { Link } from 'react-router-dom';
import { SiEventstore } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaHeartbeat, FaCalendarCheck, FaFileInvoiceDollar, FaUserNurse } from "react-icons/fa";
import { FaUserDoctor, FaBedPulse } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdDashboard, MdSettings, MdArrowDropDown, MdArrowRight } from "react-icons/md";
import useLogout from '../hooks/useLogout';

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isDoctorsMenuOpen, setIsDoctorsMenuOpen] = useState(false);
    const [isPatientsMenuOpen, setIsPatientsMenuOpen] = useState(false);
    const [isNursesMenuOpen, setIsNursesMenuOpen] = useState(false);
    const logout = useLogout();

    return (
        <div className="dashboard">
            <div className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}>
                <div className="topbar">
                    <h3 className='side'>MediConnect</h3>
                    {/* <button className="toggle-btn" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                        <IoMdMenu />
                    </button> */}
                </div>

                <ul className="nav-list">
                    <Link to="/dashboard" className='nav-link'><li><MdDashboard className='nav-icon' /> Dashboard</li></Link>
                    {/* <Link to="/patient-dashboard" className='nav-link'><li><FaHeartbeat className='nav-icon' /> Patient Dashboard</li></Link> */}
                    {/* <Link to="/dashboard/doctor-dashboard" className='nav-link'><li><MdDonutSmall className='nav-icon' /> Doctor Dashboard</li></Link> */}

                    <li onClick={() => setIsDoctorsMenuOpen(!isDoctorsMenuOpen)} className="menu-item">
                        <FaUserDoctor className='nav-icon' /> Doctors
                        {isDoctorsMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    <ul className={`submenu ${isDoctorsMenuOpen ? "open" : ""}`}>
                        <Link to="/add-doctor" className='nav-link'><li>Add Doctor</li></Link>
                        <Link to="/all-doctors" className='nav-link'><li>All Doctors</li></Link>
                        <Link to="/doctor-view" className='nav-link'><li>Edit Doctor</li></Link>
                    </ul>

                    <li onClick={() => setIsPatientsMenuOpen(!isPatientsMenuOpen)} className="menu-item">
                        <FaBedPulse className='nav-icon' /> Patients
                        {isPatientsMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                    <ul className={`submenu ${isPatientsMenuOpen ? "open" : ""}`}>
                        <Link to="/add-patient" className='nav-link'><li>Add Patient</li></Link>
                        <Link to="/all-patients" className='nav-link'><li>All Patients</li></Link>
                        <Link to="/dashboard/patient-profile" className='nav-link'><li>Patient Profile</li></Link>
                    </ul>
                    {/* <li onClick={() => setIsNursesMenuOpen(!isNursesMenuOpen)}>
                        <FaUserNurse className='nav-icon' /> Nurses
                        {isNursesMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
                    </li>
                        <ul className={`submenu ${isNursesMenuOpen ? "open" : ""}`}>
                            <Link to="#" className='nav-link'><li>All Nurses</li></Link>
                            <Link to="#" className='nav-link'><li>Nurse Profile</li></Link>
                        </ul> */}
                    <Link to="/events" className='nav-link'><li><SiEventstore className='nav-icon' /> Event Management</li></Link>
                    <Link to="/dashboard/settings" className='nav-link'><li><MdSettings className='nav-icon' /> Settings</li></Link>
                </ul>

                <button onClick={logout} className="logout-btn">
                    Logout
                </button>
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
