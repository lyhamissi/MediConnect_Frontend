import React from 'react'
import '../styles/contact.css'
import contact from '../assets/contact.jpg'
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="img">
          <img src={contact} alt="" />
        </div>
        <div className="form">
          <h3>Contact Us</h3>
          <label>Names*</label><br />
          <input type="text" />
          <label>E-mail*</label><br />
          <input type="text" />
          <label>Message*</label><br />
          <textarea name="" id=""></textarea>
          <button>SEND</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
