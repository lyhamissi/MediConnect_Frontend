import React, { useState } from 'react'
import '../dashboardstyles/sidebar.css';
import { Link } from 'react-router-dom';
import { SiEventstore } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaHeartbeat, FaCalendarCheck, FaFileInvoiceDollar, FaUserNurse } from "react-icons/fa";
import { FaUserDoctor, FaBedPulse } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdSettings, MdDonutSmall, MdArrowDropDown, MdArrowRight } from "react-icons/md";
import useLogout from '../hooks/useLogout';
const Doctorsidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isPatientsMenuOpen, setIsPatientsMenuOpen] = useState(false);
  const [isEventMenuOpen, setIsEventMenuOpen] = useState(false);
  const [isBillMenuOpen, setIsBillMenuOpen] = useState(false);
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
          <Link to="/doctor/dash" className='nav-link'><li><FaUserDoctor className='nav-icon' /> Doctor Profile</li></Link>
          <li onClick={() => setIsPatientsMenuOpen(!isPatientsMenuOpen)} className="menu-item">
            <FaBedPulse className='nav-icon' /> Patients
            {isPatientsMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
          </li>
          <ul className={`submenu ${isPatientsMenuOpen ? "open" : ""}`}>
            <Link to="/doctor/all-patients" className='nav-link'><li>All Patients</li></Link>
            {/* <Link to="/doctor/add-patient" className='nav-link'><li>Add Patient</li></Link> */}
            <Link to="/doctor/edit-patient" className='nav-link'><li>Edit Patient</li></Link>
            <Link to="/doctor/patient-pro" className='nav-link'><li>Patient Profile</li></Link>
          </ul>
          {/* <li onClick={() => setIsNursesMenuOpen(!isNursesMenuOpen)}>
            <FaUserNurse className='nav-icon' /> Nurses
            {isNursesMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
          </li>
          <ul className={`submenu ${isNursesMenuOpen ? "open" : ""}`}>
            <Link to="/doctor/all-nurses" className='nav-link'><li>All Nurses</li></Link>
            <Link to="/doctor/nurse-profile/:id" className='nav-link'><li>Nurse Profile</li></Link>
          </ul> */}
          {/* <li onClick={() => setIsNursesMenuOpen(!isNursesMenuOpen)}>
            <FaUserNurse className='nav-icon' /> Nurses
            {isNursesMenuOpen ? <MdArrowDropDown className='submenu-icon' /> : <MdArrowRight className='submenu-icon' />}
          </li>
          {isNursesMenuOpen && (
            <ul className="submenu">
              <Link to="/doctor/all-nurses" className='nav-link'><li>All Nurses</li></Link>
              <Link to="/doctor/nurse-profile/:id" className='nav-link'><li>Nurse Profile</li></Link>
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
          )} */}
          {/* <Link to="/events" className='nav-link'><li><SiEventstore className='nav-icon' /> Event Management</li></Link> */}
          {/* <Link to="/support" className='nav-link'><li><BiSupport className='nav-icon' /> Support</li></Link> */}
          <Link to="/doctor/settings" className='nav-link'><li><MdSettings className='nav-icon' /> Settings</li></Link>
        
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
    </div >
  );
}

export default Doctorsidebar
