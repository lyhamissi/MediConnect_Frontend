import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../dashboardstyles/table.css';
import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from 'axios';

const DoctorTable = () => {
    const [getdoctors, setGetDoctors] = useState([]);

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await axios.get("http://localhost:5001/user/getAllDoctors");
                setGetDoctors(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getDoctors();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5001/user//doctorDelete/${id}`);
                // Refresh the list after deletion
                setGetDoctors(getdoctors.filter((doctor) => doctor._id !== id));
                alert("Doctor deleted successfully");
            } catch (error) {
                console.error(error);
                alert("Error deleting doctor");
            }
        }
    };
    return (
        <div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Full Names</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>E-mail</th>
                            <th>Speciality</th>
                            {/* <th>Password</th> */}
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getdoctors.map((doctor) => (
                            <tr key={doctor._id}>
                                {/* <td>{doctor._id}</td> */}
                                <td>
                                    <img src={doctor.profileImage} alt={doctor.userName} className="profile-img" />  
                                    <h5>{doctor.userName}</h5>
                                </td>
                                <td>{doctor.Gender}</td>
                                <td>{doctor.userAge}</td>
                                <td>{doctor.userEmail}</td>
                                <td>{doctor.Speciality}</td>
                                {/* <td>{doctor.userPassword}</td> */}
                                <td><Link to={`/dashboard/edit-doctorform/${doctor._id}`}><MdModeEdit className='edit' /></Link></td>
                                <td><MdDelete className='delete' onClick={() => handleDelete(doctor._id)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorTable
