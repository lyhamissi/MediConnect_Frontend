import React from 'react'
import '../styles/home.css'
import heroimage from '../assets/hero image.jpg'
import { MdLocationOn, MdSecurity } from "react-icons/md";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaHospitalUser } from "react-icons/fa6";
import { LiaNetworkWiredSolid } from "react-icons/lia";
const Home = () => {
  return (
    <div>
      <div className="hero">
        <img src={heroimage} alt="" />
        <div className="content">
          <h3>"Revolutionizing Healthcare <br /> through Connected Medical <br /> Records"</h3>
          <h5>"A secure platform that connects medical centers,<br /> ensuring patient health records are accessible <br /> anytime, anywhere."</h5>
          <button>Get Started</button>
        </div>
      </div>
      <div className="who">
      <h3 className='lined-texts'>Who We Are </h3>
        <h5>The MediConnect is a digital platform designed to connect medical centers, allowing them to securely store <br />and share patient medical records. 
          This ensures that a patient’s health history is accessible across hospitals, reducing <br />the risk of incorrect treatments and enhancing healthcare efficiency.</h5>
          
      </div>
      <div className="reason">
        <div class="lined-text">Why Choose Us</div>
        <div className="card-container">
          <div className="card">
            <div className="top">
              <div className="container"><FaHospitalUser className='location' /></div>
            </div>
            <div className="text">
            <h4>Connected Medical Centers</h4>
            <p>“Hospitals and clinics can securely share patient data.”</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="container"><MdSecurity className='location' /></div>
            </div>
            <div className="text">
              <h4>Secure & Confidential</h4>
              <p>“Advanced encryption ensures patient information is protected.”</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="container"><PiClockCounterClockwiseBold className='location' /></div>
            </div>
            <div className="text">
              <h4>Faster Treatment Decisions</h4>
              <p>“Quick access to medical history improves patient care.”</p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <div className="container"><LiaNetworkWiredSolid className='location' /></div>
            </div>
            <div className="text">
                <h4>Doctor's Collaboration</h4>
                <p>“Physicians can consult with other healthcare providers in real time.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
