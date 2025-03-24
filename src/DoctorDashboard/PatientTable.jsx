import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../dashboardstyles/table.css';
import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from 'axios';
const PatientTable = () => {
    const [getpatients, setGetPatients] = useState([]);
    useEffect(() => {
        const getPatients = async () => {

            try {
                const response = await axios.get(`http://localhost:5001/patient/getAllPatients`);
                setGetPatients(response.data)
            }
            catch (error) {
                console.log(error);

            }
        }
        getPatients();
    }, []);
    const handleDelete = async(id) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5001/patient/deletePatientById/${id}`);
                // Refresh the list after deletion
                setGetPatients(getpatients.filter((patient) => patient._id !== id));
                alert("Patient deleted successfully");
            } catch (error) {
                console.error(error);
                alert("Error deleting patient");
            }
        }
    };
    return (
        <div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>Full Names</th>
                            <th>National Id</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>E-mail</th>
                            {/* <th>Disease</th> */}
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getpatients.map((patient) => (
                            <tr key={patient._id}>
                                <td>{patient.patientName}</td>
                                <td>{patient.patientId}</td>
                                <td>{patient.patientGender}</td>
                                <td>{patient.patientAge}</td>
                                <td>{patient.patientEmail}</td>
                                {/* <td>{patient.patientDisease}</td> */}
                                <td>
                                    <Link to={`/doctor/edit-patientform/${patient._id}`}>
                                    <MdModeEdit className='edit' />
                                    </Link>
                                </td>
                                <td><MdDelete className='delete'
                                onClick={() => handleDelete(patient._id)} 
                                /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientTable
