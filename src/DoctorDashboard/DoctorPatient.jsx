import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { BsAlarm } from "react-icons/bs";

const DoctorPatient = () => {
  const data = [
    { name: "Jan", BloodPressure: 30, HeartRate: 35 },
    { name: "Feb", BloodPressure: 60, HeartRate: 30 },
    { name: "Mar", BloodPressure: 65, HeartRate: 40 },
    { name: "Apr", BloodPressure: 80, HeartRate: 65 },
    { name: "May", BloodPressure: 40, HeartRate: 50 },
    { name: "Jun", BloodPressure: 90, HeartRate: 70 },
    { name: "Jul", BloodPressure: 70, HeartRate: 50 },
  ];
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/patient/getPatientById/${id}`);
        setPatient(response.data);
      }
      catch (error) {
        console.error("Error fetching patient", error);
      }
    };
    getPatient();
  }, [id]);
  if (!patient) {
    return <h6 style={{ fontSize: "1.5rem", color: " red" }}>Patient Not Found</h6>
  }
  
  return (
    <div className="dashboard-container">

      <div className="patient-info-card">
        <div className="profile-body">
          {/* <img src={doctor.profileImage} alt="Doctor Profile" /> */}
          <h2>{patient.patientName}</h2>
          <p className="expertise"><strong>{patient.patientDisease}</strong></p>
          <p><strong>National ID:</strong> {patient.patientId}</p>
          <p><strong>Email:</strong> <a href="mailto:smith-wright@example.com">{patient.patientEmail}</a></p>

        </div>
        <div className="doctor-statss">
          <div className="stat">
            <p>{patient.patientHeight}</p>
            <small>Height</small>
          </div>
          <div className="stat">
            <p>{patient.patientGender}</p>
            <small>Gender</small>
          </div>
          <div className="stat">
            <p>{patient.patientAge} yrs</p>
            <small>Age</small>
          </div>
          <div className="stat">
            <p>{patient.patientKgs}</p>
            <small>Kgs</small>
          </div>
        </div>
      </div>
      <div className="chart-section">
        <h3>Blood Levels</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 5 }} /> {/* Adjust this value as needed */}
            <Bar dataKey="BloodPressure" fill="#2979ff" />
            <Bar dataKey="HeartRate" fill="#2978ff93" />
          </BarChart>
        </ResponsiveContainer>


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
        <h3>Personal Information</h3>
        <ul className="info">
          <li><strong>Names:</strong> {patient.patientName}</li>
          <li><strong>Gender:</strong> {patient.patientGender}</li>
          <li><strong>Age:</strong> {patient.patientAge}</li>
          <li><strong>Phone:</strong> {patient.patientPhone}</li>
          <li><strong>E-mail:</strong> {patient.patientEmail}</li>
          <li><strong>National ID:</strong> {patient.patientId}</li>
        </ul>
      </div>
      <div className="specialiity">
        <h3>Messages</h3>
        <div className="message-list">
          <li style={{ marginTop: "2rem" }}><strong>{patient.doctorName} :</strong> {patient.patientDescription}</li>
        </div>
      </div>
      {/* <div className="specialiity">
        <h1>Notifications</h1>
        <ul>
          <li>📸 Dr. Sultads sent you a photo</li>
          <li>⏰ Reminder: Treatment Time! 25 July - 20:00</li>
          <li>📊 Report created successfully</li>
        </ul>
      </div> */}
    </div>
  )
}

export default DoctorPatient
