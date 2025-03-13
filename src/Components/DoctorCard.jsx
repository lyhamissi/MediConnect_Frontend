import React from 'react'
import "../dashboardstyles/DoctorCard.css";
const DoctorCard = ({doctor}) =>{
    return (
        <div >
            <div className="doctos-card">
            <div className="doctor-header">
                <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="speciality">{doctor.speciality}</p>
            </div>
            <div className="doctor-stats">
                <div className="stat">
                    <p>{doctor.patients}</p>
                    <small>Patient</small>
                </div>
                <div className="stat">
                    <p>{doctor.age} yrs</p>
                    <small>Doc age</small>
                </div>
                <div className="stat">
                    <p>{doctor.points}</p>
                    <small>Points</small>
                </div>
            </div>
            <button className="view">View Profile</button>
        </div>
        </div>
    )
}

export default DoctorCard
