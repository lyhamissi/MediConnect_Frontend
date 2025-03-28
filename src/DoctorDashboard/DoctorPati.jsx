import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorAllP from './DoctorAllP';

const DoctorPati = () => {
    const [getpatientss, setGetPatientss] = useState([]);

    useEffect(() => {
        const getPatientss = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/patient/getAllPatients`);
                setGetPatientss(response.data);
            } catch (error) {
                console.log("Error fetching patients:", error);
            }
        };

        getPatientss();
    }, []); // Dependency array remains empty to only fetch once

    return (
        <div>
            <div className="doctor-list">
                {getpatientss.length > 0 ? (
                    getpatientss.map((getpatients) => (
                        <DoctorAllP key={getpatients._id} getpatients={getpatients} />
                    ))
                ) : (
                    <p>No patients found.</p>
                )}
            </div>
        </div>
    );
};

export default DoctorPati;
