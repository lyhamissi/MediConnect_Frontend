import React from 'react'
import { MdMedicationLiquid, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineClose } from "react-icons/md";
import { FaUserDoctor, FaBed } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import '../dashboardstyles/dashboardview.css'
import profile1 from '../assets/profile1.jpg'
// import Charts from './Charts';
// import PCharts from './PCharts';
// import TCharts from './TCharts';
// import DCharts from './DCharts';
import Areas from './Area';
import { Link } from 'react-router-dom';
const Dasboardview = () => {
  const doctors = [
    {
      name: "Smith Wright",
      speciality: "Clinical Doctor",
      rating: "4.8",
      patients: "1202",
      age: "29",
      points: "2259",
      image: profile1,
    },
    {
      name: "Brooks Latshaw",
      speciality: "Surgeon",
      rating: "4.8",
      patients: "3542",
      age: "45",
      points: "4563",
      image: profile1,
    }
  ];
  return (
    <div>
      <div className="widgets">
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaBed className="ordericon" />

            </div>
            <div className="texts">
              <p>200 Bed <br /></p>
              <span>Total Hospital Beds</span>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaUserDoctor className="pageicon" />

            </div>
            <div className="texts">
              <p>126 Doctor<br /></p>
              <span>Available Doctors</span>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <MdMedicationLiquid className="totalicon" />

            </div>
            <div className="texts">
              <p>3,743 Bills<br /></p>
              <span>Pharmacy Medics</span>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaAmbulance className="downloadicon" />

            </div>
            <div className="texts">
              <p>36 Ambulance<br /></p>
              <span>All Ambulance Cars</span>
            </div>

          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="area">
          <p>Hospital Visits Statistics</p> <br />
          <Areas />
        </div>
        <section className="doctors-list">
          <div className="doctors-header">
            <h2>Doctors List</h2>
          </div>
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt="Doctor" />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.speciality}</p>
              </div>
            </div>))}
          <button className="view-all"><Link to='/all-doctors' className='nav-link'>View all doctors</Link></button>

        </section>

      </div>
      <div className="sec-widgets">
        <div className="card-modal">
          <div className="top-part">
            <h4>Recent Visits</h4>
            <div className="ico">
              <MdKeyboardArrowUp />
              <IoSettingsSharp />
              <MdOutlineClose />
            </div>
          </div>
        </div>
        <div className="card-modal">
          <div className="top-part">
            <h4>Operation Success Rate </h4>
            <div className="ico">
              <MdKeyboardArrowUp />
              <IoSettingsSharp />
              <MdOutlineClose />
            </div>
          </div>
        </div>
        <div className="card-modal">
          <div className="top-part">
            <h4>Pharmacy Orders</h4>
            <div className="top-icon">
              <MdKeyboardArrowUp />
              <IoSettingsSharp />
              <MdOutlineClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dasboardview
