import React, { useState } from 'react'
import '../dashboardstyles/sidebar.css';
import { Link } from 'react-router-dom';
import { SiEventstore } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { FaHeartbeat, FaCalendarCheck, FaFileInvoiceDollar,FaUserNurse  } from "react-icons/fa";
import { FaUserDoctor, FaBedPulse } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdDashboard, MdDonutSmall, MdArrowDropDown, MdArrowRight } from "react-icons/md";
const NurseSidebar = () => {
const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isEventMenuOpen, setIsEventMenuOpen] = useState(false);
  const [isBillMenuOpen, setIsBillMenuOpen] = useState(false);
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
          <Link to="#" className='nav-link'><li><FaUserNurse  className='nav-icon' /> Nurse Profile</li></Link>
          <Link to="#" className='nav-link'><li><FaHeartbeat className='nav-icon' /> Patient Profile</li></Link>
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
    </div >
  );
}


export default NurseSidebar
