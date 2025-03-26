import React, { useState } from 'react';
import '../dashboardstyles/support.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const Support = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Optional: send form data to your backend or email service
            const response = await axios.post('http://localhost:5001/contact/support', formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 201) {
                Notify.success("Your message has been sent! We will get back to you soon.");
                setFormData({ fullName: '', email: '', message: '' });
            }
            else {
                Notify.failure("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            Notify.failure("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="support-container">
            <h1 className="support-title">Patient Support Center</h1>
            <p className="support-intro">Hi there! How can we help you today? Please check common topics or send us a message.</p>

            <div className="support-topics">
                <button>Appointment Issues</button>
                <button>Access Records</button>
                <button>Billing Inquiries</button>
                <button>Password Reset</button>
            </div>

            <h2 className="support-subtitle">Send us a message</h2>
            <form className="support-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    placeholder="Describe your issue..."
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>

            <div className="support-contact">
                <h3>Other ways to reach us:</h3>
                <p >Email: <span style={{ color: "#444", fontSize: "1rem" }}>uwitonzeafuwa@gmail.com</span></p>
                <p>Phone: <span style={{ color: "#444", fontSize: "1rem" }}>+250 793 213 119</span></p>
            </div>
        </div>
    )
}

export default Support
