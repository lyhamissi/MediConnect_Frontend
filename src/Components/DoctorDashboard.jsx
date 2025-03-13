import React from 'react';
import '../dashboardstyles/DoctorDashboard.css';

const DoctorDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="profile-card">
        <div className="profile-header"></div>
        <div className="profile-body">
          {/* <img src="https://via.placeholder.com/100" alt="Doctor" className="profile-image" /> */}
          <h2>Dr. Smith Wright</h2>
          <p className="expertise">Hair Repair and Loss Expert</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Corrupti eveniet.
          </p>
          <p>Email: <a href="mailto:smith-wright@example.com">smith-wright@example.com</a></p>
          <button className="view-all">Send Message</button>
        </div>
      </div>

      <div className="info-section">
        <div className="messages">
          <h3>Messages</h3>
          <p className="message-count">25 New</p>
          <div className="message-list">
            <p><strong>Sunil Joshi</strong> - Lorem ipsum dolor sit amet...</p>
            <p><strong>Fardnio Nany</strong> - Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <div className="notific">
          <h3>Notifications</h3>
          <ul>
            <li>📸 Dr. Sultads sent you a photo</li>
            <li>⏰ Reminder: Treatment Time! 25 July - 20:00</li>
            <li>📊 Report created successfully</li>
          </ul>
        </div>
      </div>

      <div className="bottom-section">
        <div className="specialty">
          <h3>Specialty</h3>
          <ul>
            <li><strong>Certified:</strong> Cold Laser Therapy</li>
            <li><strong>Medication Laser:</strong> Hair Loss Product</li>
            <li><strong>Professional:</strong> Certified Hair Loss Surgery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
