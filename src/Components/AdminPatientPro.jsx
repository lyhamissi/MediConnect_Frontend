import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { useParams } from "react-router-dom";
const AdminPatientPro = () => {
    const data = [
        { name: "Jan", BloodPressure: 30, HeartRate: 35 },
        { name: "Feb", BloodPressure: 60, HeartRate: 30 },
        { name: "Mar", BloodPressure: 65, HeartRate: 40 },
        { name: "Apr", BloodPressure: 80, HeartRate: 65 },
        { name: "May", BloodPressure: 40, HeartRate: 50 },
        { name: "Jun", BloodPressure: 90, HeartRate: 70 },
        { name: "Jul", BloodPressure: 70, HeartRate: 50 },
    ];
    const { patientId } = useParams();
    const [patient, setPatient] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5001/patient/getPatientByNationalId/${patientId}`
                );

                if (!response.ok) {
                    throw new Error("Patient not found");
                }

                const data = await response.json();
                setPatient(data);
                setError("");
            } catch (err) {
                setError(err.message);
                setPatient(null);
            }
        };

        fetchPatient();
    }, [patientId]);
    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {/* {patientData && (
                <div className="profile-container">
                    <h2>Patient Profile</h2>
                    <p><strong>Name:</strong> {patientData.patientName}</p>
                    <p><strong>Age:</strong> {patientData.patientAge}</p>
                    <p><strong>Gender:</strong> {patientData.patientGender}</p>
                    <p><strong>Contact:</strong> {patientData.patientPhone}</p>
                    <p><strong>Disease:</strong> {patientData.patientDisease}</p>
                    <p><strong>Height:</strong> {patientData.patientHeight} cm</p>
                    <p><strong>Weight:</strong> {patientData.patientKgs} kg</p>
                    <p><strong>Description:</strong> {patientData.patientDescription}</p>
                </div>

            )} */}
            <div className="dashboard-container">
                {patient && (
                    <div className="patient-info-card">
                        <div className="profile-body">
                            <h2>{patient.patientName}</h2>
                            <p className="expertise"><strong>{patient.patientDisease}</strong></p>
                            <p><strong>Email:</strong> <a href="mailto:smith-wright@example.com">{patient.patientEmail}</a></p>
                            <p><strong>National ID:</strong> {patient.patientId}</p>
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
                    </div>)}
                <div className="chart-section">
                    <h3>Blood Levels</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
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
                    {patient && (
                        <ul className="info">
                            <li><strong>Names:</strong> {patient.patientName}</li>
                            <li><strong>Gender:</strong> {patient.patientGender}</li>
                            <li><strong>Age:</strong> {patient.patientAge}</li>
                            <li><strong>Phone:</strong> {patient.patientPhone}</li>
                            <li><strong>E-mail:</strong> {patient.patientEmail}</li>
                            <li><strong>National ID:</strong> {patient.patientId}</li>
                        </ul>)}
                </div>
                <div className="specialiity">
                    <h3>Messages</h3>
                    {patient && (
                        <div className="message-list">
                            <li style={{ marginTop: "2rem" }}><strong >{patient.doctorName}:  </strong> {patient.patientDescription}</li>
                        </div>)}
                </div></div>
        </div>
    )
}

export default AdminPatientPro
