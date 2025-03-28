import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientEvent = () => {
    const [requests, setRequests] = useState([]);
    const patientEmail = "isimbi@gmail.com"; // Replace this with the logged-in user's email

    useEffect(() => {
        const fetchPatientRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/contact/patient-requests?email=${patientEmail}`);
                setRequests(response.data);
            } catch (error) {
                console.error("Error fetching patient support requests:", error);
            }
        };

        fetchPatientRequests();
    }, []);

    return (
        <div>
            <div className="table-section">
                <h1>My Support Requests</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Request</th>
                            <th>Reply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request._id}>
                                <td>{request.fullName}</td>
                                <td>{request.email}</td>
                                <td>{new Date(request.createdAt).toLocaleString()}</td>
                                <td>{request.message}</td>
                                <td>
                                    {request.replyMessage ? (
                                        <span style={{ color: "green", fontSize:"1rem" }}>{request.replyMessage}</span>
                                    ) : (
                                        <span style={{ color: "red" }}>No reply yet</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientEvent;
