import React from 'react'
import "../dashboardstyles/DoctorCard.css";
import { useNavigate } from 'react-router-dom';
const PatientCard = ({ getpatient }) => {
    const navigation = useNavigate();
    const handleNavigate = (_id) => {
        navigation(`/patient-profile/${_id}`)
        navigation(`/patient-profile/${_id}`)
    }
    return (
        <div>
            <div className="doctos-card">
                <div className="doctor-info">
                    <h3>{getpatient.patientName}</h3>
                </div>
                <div className="doctor-statss">
                    <div className="stat">
                        <p>{getpatient.patientHeight}</p>
                        <small>Height</small>
                    </div>
                    <div className="stat">
                        <p>{getpatient.patientGender}</p>
                        <small>Gender</small>
                    </div>
                    <div className="stat">
                        <p>{getpatient.patientAge} yrs</p>
                        <small>Age</small>
                    </div>
                    <div className="stat">
                        <p>{getpatient.patientKgs}</p>
                        <small>Kgs</small>
                    </div>
                </div>
                <button className="view" onClick={() => handleNavigate(getpatient._id)}>View Profile</button>
            </div>
        </div>
    )
}

export default PatientCard
