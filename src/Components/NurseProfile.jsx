import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../dashboardstyles/doctorProfie.css';
const NurseProfile = () => {
  const { id } = useParams();
  const [nurse, setNurse] = useState(null);

  useEffect(() => {
    const getNurse = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/user/getNurseById/${id}`);
        setNurse(response.data);
      }
      catch (error) {
        console.error("Error fetching nurse", error);
      }
    };
    getNurse();
  }, [id]);
  if (!nurse) {
    return <h6 style={{ fontSize: "1.5rem" }}>Nurse Not Found</h6>;
  }
  return (
    <div className="doctor-profile">

      <div className="profile-card">
        <div className="profile-header"></div>
        <div className="profile-body">
          <img src={nurse.profileImage} alt="Doctor Profile" />
          <h2> {nurse.userName}</h2>
          <p className="expertise"><strong>{nurse.Speciality}</strong></p>
          <p><strong>Email:</strong> <a href="mailto:smith-wright@example.com">{nurse.userEmail}</a></p>
          <p><strong>Phone:</strong> {nurse.phoneNumber}</p>
        </div>
      </div>
      <div className="specialiity">
        <h1>Personal Information</h1>
        <ul className="info">
          <li><strong>Names:</strong> {nurse.userName}</li>
          <li><strong>Gender:</strong> {nurse.Gender}</li>
          <li><strong>Age:</strong> {nurse.userAge}</li>
          <li><strong>Phone:</strong> {nurse.phoneNumber}</li>
          <li><strong>E-mail:</strong> {nurse.userEmail}</li>
          <li><strong>Speciality:</strong> {nurse.Speciality}</li>
        </ul>
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
  )
}

export default NurseProfile
