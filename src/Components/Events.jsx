// AdminDashboard.js (or relevant component)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../dashboardstyles/table.css';
const Events = () => {
    const [supportRequests, setSupportRequests] = useState([]);
    const [reply, setReply] = useState("");
    const [selectedRequestId, setSelectedRequestId] = useState(null);
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
    const handleReplySubmit = async (e, requestId, email) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:5001/contact/reply`, {
                requestId,
                email, // Send reply to the user email
                replyMessage: reply,
            });

            alert(response.data.message);
            setReply(""); // Clear input after submitting
            setSelectedRequestId(null); // Hide form after submitting
        } catch (error) {
            console.error("Error sending reply:", error);
            alert("Failed to send reply. Try again.");
        }
    };
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
                        <React.Fragment key={request._id}>
                            <tr>
                                <td>{request.fullName}</td>
                                <td>{request.email}</td>
                                <td>{request.message}</td>
                                <td>{new Date(request.createdAt).toLocaleString()}</td>
                                <td style={{ color: "green" }}>{request.status}</td>
                                <td>
                                    <span 
                                        className="edit"
                                        style={{ fontSize: "1rem", cursor: "pointer", color: "blue" }}
                                        onClick={() =>
                                            setSelectedRequestId(
                                                selectedRequestId === request._id ? null : request._id
                                            )
                                        }
                                    >
                                        Reply
                                    </span>
                                </td>
                            </tr>

                            {/* Show Reply Form Below Row If Selected */}
                            {selectedRequestId === request._id && (
                                <tr>
                                    <td colSpan="6">
                                        <form 
                                            onSubmit={(e) => handleReplySubmit(e, request._id, request.email)} 
                                            style={{ display: "flex", gap: "10px", alignItems: "center" }}
                                        >
                                            <input
                                                type="text"
                                                placeholder="Type your reply..."
                                                value={reply}
                                                onChange={(e) => setReply(e.target.value)}
                                                required
                                                style={{ flex: 1, padding: "5px" }}
                                            />
                                            <button  className ="edit" type="submit" style={{ padding: "5px 10px", cursor: "pointer" }}>
                                                Send
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default Events;
