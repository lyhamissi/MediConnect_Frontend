import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div ><h2>MediConnect</h2></div>
            <ul>
                <Link to="/home" className='nav-link'><li>Home</li></Link>
                <Link to="/about" className='nav-link'><li>About Us</li></Link>
                <Link to="/contact" className='nav-link'><li>Contact Us</li></Link>
                <Link to="/login" className='nav-link'><li className='login'>Login</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
