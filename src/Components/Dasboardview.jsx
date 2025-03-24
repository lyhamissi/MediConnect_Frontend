import React, { useState, useEffect } from 'react'
import { MdMedicationLiquid, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineClose } from "react-icons/md";
import { FaUserDoctor, FaBed, FaBedPulse } from "react-icons/fa6";
import { FaAmbulance,FaUserNurse } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import '../dashboardstyles/dashboardview.css'
import profile1 from '../assets/profile1.jpg'
import Areas from './Area';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Dasboardview = () => {
  const [getdoctors, setGetDoctors] = useState([]);
  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5001/user/getAllDoctors");
        setGetDoctors(response.data);
      }
      catch (error) {
        console.log(error);

      }
    }
    getDoctors();
  }, []);

  const [doctorCount, setDoctorCount] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchDoctorCount = async () => {
      try {
        const response = await fetch("http://localhost:5001/user/countDoctors");
        if (!response.ok) {
          throw new Error("Failed to fetch doctor count");
        }
        const data = await response.json();
        setDoctorCount(data.count);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDoctorCount();
  }, []);
  
  const [nurseCount, setNurseCount] = useState(0);
  useEffect(() =>{
    const fetchNurseCount = async () =>{
      try{
        const response = await fetch("http://localhost:5001/user/countNurses");
        if (!response.ok) {
          throw new Error("Failed to fetch Nurse count");
        }
        const data = await response.json();
        setNurseCount(data.count);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchNurseCount();
  },[]);
  const [patientCount, setPatientCount]= useState(0);
  useEffect(() =>{
    const fetchPatientCount = async () =>{
      try{
        const response = await fetch("http://localhost:5001/patient/countPatients");
        if (!response.ok) {
          throw new Error("Failed to fetch Patient count");
        }
        const data = await response.json();
        setPatientCount(data.count);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPatientCount();
  },[]);
  return (
    <div className='dash'>
      <div className="widgets">
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaBedPulse className="ordericon" />

            </div>
            <div className="texts">
            {error ? (
                <p style={{ color: "red", fontSize: "1.5rem" }}>{error}</p>
              ) : (
                <>
                  <p>{patientCount}</p>
                  <span>Total Patients</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaUserDoctor className="pageicon" />

            </div>
            <div className="texts">
              {error ? (
                <p style={{ color: "red" ,fontSize: "1.5rem"}}>{error}</p>
              ) : (
                <>
                  <p>{doctorCount}</p>
                  <span>Available Doctors</span>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <div className="widget">
          <div className="top">
            <div className="icon-container">
              <MdMedicationLiquid className="totalicon" />

            </div>
            <div className="texts">
              <p><br /></p>
              <span>Pharmacy Medics</span>
            </div>
          </div>
        </div> */}
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaUserNurse className="downloadicon" />

            </div>
            <div className="texts">
            {error ? (
                <p style={{ color: "red",fontSize: "1.5rem" }}>{error}</p>
              ) : (
                <>
                  <p>{nurseCount}</p>
                  <span>Available Nurses</span>
                </>
              )}
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
          {getdoctors.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
              <img src={doctor.profileImage} alt="Doctor" />
              <div className="doctor-info">
                <h3>{doctor.userName}</h3>
                <p>{doctor.Speciality}</p>
              </div>
            </div>))}
          <button className="view-all"><Link to='/all-doctors' className='nav-link'>View all doctors</Link></button>

        </section>

      </div>
      {/* <div className="sec-widgets">
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
      </div> */}
    </div>
  )
}

export default Dasboardview
