import React, { useEffect } from 'react'
import PatientCard from './PatientCard'
import { useState } from 'react'
import axios from 'axios'
const AllPatients = () => {
    const [getpatients, setGetPatients] = useState([]);
    useEffect(() => {
        const getPatients = async () =>{
      
        try {
            const response = await axios.get(`http://localhost:5001/patient/getAllPatients`);
            setGetPatients(response.data)
        }
        catch (error) {
            console.log(error);

        }      
        }
        getPatients();
    },[]);
    return (
        <div>
            <div className="doctor-list">
                {getpatients.map((getpatient) => (
                    <PatientCard key={getpatient._id} getpatient={getpatient} />
                ))}
            </div>
        </div>
    )
}

export default AllPatients
