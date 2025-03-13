import React from 'react'
import '../styles/about.css';
import { MdSecurity } from "react-icons/md";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaHospitalUser } from "react-icons/fa6";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import about from '../assets/about.jpg';
const About = () => {
  return (
    <div>
      <div className="hero-about">
        <img src={about} alt="" />
        <div className="about-text">
          <h3>WHO WE ARE </h3>
          <h5>The <span>MediConnect</span> is a digital platform designed to connect medical centers, allowing them to securely store <br />and share patient medical records.
            This ensures that a patient’s health history is accessible across hospitals, reducing <br />the risk of incorrect treatments and enhancing healthcare efficiency.</h5>
        </div>
      </div>
      <h3 className='mis'>Our Mission</h3>
      <div className="missionsss">
      <div className="missions">
        
        <div className="mission">
          <div className="icontainer"><FaHospitalUser className='miss' /></div>
          <p>Provide secure and confidential patient<br /> record management.</p>
        </div>
        <div className="mission">
          <div className="icontainer"><MdSecurity className='miss' /></div>
          <p>Improve doctor collaboration for better patient care.</p>
        </div>
      </div>
      <div className="missions">
        <div className="mission">
          <div className="icontainer"><PiClockCounterClockwiseBold className='miss' /></div>
          <p>Enable Faster and more informed treatment<br /> decisions for doctors.</p>
        </div>
        <div className="mission">
          <div className="icontainer"><LiaNetworkWiredSolid className='miss' /></div>
          <p>Ensure Seamless access to medical history across <br />registered healthcare facilities.</p>
        </div>
        </div>
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

export default About
