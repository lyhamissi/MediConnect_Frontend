import React from 'react'
import "../dashboardstyles/DoctorCard.css";
import { useNavigate } from 'react-router-dom';
const NurseCard = ({getnurse}) => {
  const navigation = useNavigate();
   const handleNavigate = (_id) =>{
    navigation(`/nurse-profile/${_id}`);
   }
  return (
    <div>
      <div className="doctos-card">
            <div className="doctor-header">
                <img src={getnurse.profileImage} alt={getnurse.userName} />
            </div>
            <div className="doctor-info">
                <h3>{getnurse.userName}</h3>
                <p className="speciality">{getnurse.Speciality}</p>
            </div>
            <div className="doctor-stats">
                {/* <div className="stat">
                    <p>{doctor.patients}</p>
                    <small>Patient</small>
                </div> */}
                <div className="stat">
                    <p>{getnurse.userAge} yrs</p>
                    <small>Doc age</small>
                </div>
                {/* <div className="stat">
                    <p>{doctor.points}</p>
                    <small>Points</small>
                </div> */}
            </div>
            <button className="view" onClick={() => handleNavigate(getnurse._id)}>View Profile</button>
        </div>
    </div>
  )
}

export default NurseCard
