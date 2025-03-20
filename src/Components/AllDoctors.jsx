import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard';
import axios from 'axios';
const AllDoctors = () => {
  const [getdoctors, setGetDoctors] = useState([]);
  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5001/user/getAllDoctors");
        setGetDoctors(response.data);
      }
      catch (error) {
        console.log(error);

      }
    }
    getDoctors();
  }, []);
  return (
    <div>
      <div className="doctor-list">
        {getdoctors.map((getdoctor) => (
          <DoctorCard key={getdoctor._id} getdoctor={getdoctor} />
        ))}
      </div>
    </div>
  )
}

export default AllDoctors
