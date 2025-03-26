// AdminDashboard.js (or relevant component)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../dashboardstyles/table.css';

import { MdModeEdit, MdDelete } from "react-icons/md";
const Events = () => {
    const [supportRequests, setSupportRequests] = useState([]);

    useEffect(() => {
        const fetchSupportRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5001/contact//getrequest');
                setSupportRequests(response.data); // Update state with the fetched requests
            } catch (error) {
                console.error('Error fetching support requests:', error);
            }
        };

        fetchSupportRequests();
    }, []);

    return (
        <div>

            <div className="table-section"><h1>Support Requests</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supportRequests.map((request) => (
                            <tr key={request._id}>
                                <td>{request.fullName}</td>
                                <td>{request.email}</td>
                                <td>{request.message}</td>
                                <td>{new Date(request.createdAt).toLocaleString()}</td>
                                <td style={{color: "green"}}>{request.status}</td>
                                <td > <span  className='edit' style={{fontSize: "1rem"}}>Reply</span></td>
                                {/* <td><MdDelete className='delete' /></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Events;
