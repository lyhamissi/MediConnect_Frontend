import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footers">
            <div className="footer">
                <div className="footer1">
                    <h3>Contact</h3>
                    <div className="contact">
                        <div className="container"><MdLocationOn className='location' /></div>
                        <li>Kigali,Rwanda</li>
                    </div>
                    <div className="contact">
                        <div className="container"><MdEmail className='location' /></div>
                        <li className='email'> uwitonzeafuwahamissi@gmail.com</li>
                    </div>

                    <div className="contact">
                        <div className="container"><FaPhoneAlt className='location' /></div>
                        <li>+250 793 213 119</li>
                    </div>

                </div>
                <div className="footer1">
                    <h3>Services</h3>
                    <li>Patient Record Management</li>
                    <li>Doctor Collaboration Platform</li>
                    <li>Secure Health Data StoragE</li>
                    <li>Medical Center Integration</li>
                </div>
                <div className="footer1">
                    <h3>About</h3>
                    <p className='about'>Learn more about our mission to revolutionize<br />  healthcare with secure and accessible <br />patient records.</p>
                    <Link to="/signup" className='nav-link'><li className='signup'>Sign Up</li></Link>
                </div>
            </div>
            <div className="copyright">
                <h6>Terms of service & Privacy Policy </h6>
                <h2>MediConnect</h2>
            </div>


        </div>
    )
}

export default Footer
