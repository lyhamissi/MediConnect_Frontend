import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../dashboardstyles/table.css';
import { MdModeEdit, MdDelete } from "react-icons/md";
import axios from 'axios';
const NurseTable = () => {
    const [getnurses, setGetNurses] = useState([]);
    useEffect(() => {
        const getNurses = async () => {
            try {
                const response = await axios.get("http://localhost:5001/user/getAllNurses");
                setGetNurses(response.data);
            }
            catch (error) {
                console.log(error);

            }
        }
        getNurses();
    }, []);
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
                        {getnurses.map((nurse) => (
                            <tr key={nurse._id}>
                                {/* <td>{doctor._id}</td> */}
                                <td>
                                    <img src={nurse.profileImage} alt={nurse.userName} className="profile-img" />
                                    {nurse.userName}
                                </td>
                                <td>{nurse.Gender}</td>
                                <td>{nurse.userAge}</td>
                                <td>{nurse.userEmail}</td>
                                <td>{nurse.Speciality}</td>
                                {/* <td>{doctor.userPassword}</td> */}
                                <td>
                                    {/* <Link to={`/dashboard/edit-doctorform/${doctor._id}`}> */}
                                    <MdModeEdit className='edit' />
                                    {/* </Link> */}
                                    </td>
                                <td><MdDelete className='delete' 
                                // onClick={() => handleDelete(doctor._id)} 
                                /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NurseTable
