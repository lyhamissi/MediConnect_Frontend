import '../dashboardstyles/DoctorDashboard.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const DoctorDashboard = () => {
  const { id } = useParams(); // Get the doctor ID from URL
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/user/getAllDoctors`);
        setDoctor(response.data);
      }
      catch (error) {
        console.error("Error fetching doctor", error);
      }
    };
    getDoctor();
  }, [id]);
  return (
    <div className="doctor-profile">

      <div className="profile-card">
        <div className="profile-header"></div>
        <div className="profile-body">
          {/* <img src={doctor.profileImage} alt="Doctor Profile" /> */}
          <h2>{doctor.userName}</h2>
          <p className="expertise"><strong>{doctor.Speciality}</strong></p>
          <p className="description">
            {doctor.userDescription}
          </p>
          <p><strong>Email:</strong> <a href="mailto:smith-wright@example.com">{doctor.userEmail}</a></p>
          <p><strong>Phone:</strong> {doctor.phoneNumber}</p>
        </div>
      </div>
      {/* <div className="bottom-section">
  <div className="specialiity">
    <h1>Speciality</h1>
    <ul>
      <li><strong>Certified:</strong> Cold Laser Therapy</li>
      <li><strong>Medication Laser:</strong> Hair Loss Product</li>
      <li><strong>Professional:</strong> Certified Hair Loss Surgery</li>
    </ul>
  </div>
</div> */}
      <div className="specialiity">
        <h1>Personal Information</h1>
        <ul className="info">
          <li><strong>Names:</strong> {doctor.userName}</li>
          <li><strong>Gender:</strong> {doctor.Gender}</li>
          <li><strong>Age:</strong> {doctor.userAge}</li>
          <li><strong>Phone:</strong> {doctor.phoneNumber}</li>
          <li><strong>E-mail:</strong> {doctor.userEmail}</li>
          <li><strong>Speciality:</strong> {doctor.Speciality}</li>
        </ul>
      </div>
      <div className="specialiity">
        <h1>Messages</h1>
        <p className="message-count">25 New</p>
        <div className="message-list">
          <li><strong>Sunil Joshi</strong> - Lorem ipsum dolor sit amet...</li>
          <li><strong>Fardnio Nany</strong> - Lorem ipsum dolor sit amet...</li>
        </div>
      </div>
      <div className="specialiity">
        <h1>Notifications</h1>
        <ul>
          <li>📸 Dr. Sultads sent you a photo</li>
          <li>⏰ Reminder: Treatment Time! 25 July - 20:00</li>
          <li>📊 Report created successfully</li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorDashboard;
