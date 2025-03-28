import React from 'react';
import "../dashboardstyles/DoctorCard.css";
import { useNavigate } from 'react-router-dom';

const DoctorAllP = ({ getpatients }) => {
    const navigate = useNavigate(); // Corrected variable name from navigation to navigate

    const handleNavigate = (_id) => {
        navigate(`/doctor/patient-profile/${_id}`);
    };

    return (
        <div>
            <div className="doctos-card">
                <div className="doctor-info">
                    <h3>{getpatients.patientName}</h3>
                </div>
                <div className="doctor-statss">
                    <div className="stat">
                        <p>{getpatients.patientHeight}</p>
                        <small>Height</small>
                    </div>
                    <div className="stat">
                        <p>{getpatients.patientGender}</p>
                        <small>Gender</small>
                    </div>
                    <div className="stat">
                        <p>{getpatients.patientAge} yrs</p>
                        <small>Age</small>
                    </div>
                    <div className="stat">
                        <p>{getpatients.patientKgs}</p>
                        <small>Kgs</small>
                    </div>
                </div>
                <button className="view" onClick={() => handleNavigate(getpatients._id)}>View Profile</button>
            </div>
        </div>
    );
};

export default DoctorAllP;
