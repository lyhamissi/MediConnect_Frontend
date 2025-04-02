import React, { useState, useEffect } from 'react'
import { MdMedicationLiquid, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineClose } from "react-icons/md";
import { FaUserDoctor, FaBed, FaBedPulse } from "react-icons/fa6";
import { FaAmbulance, FaUserNurse } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import '../dashboardstyles/dashboardview.css'
import profile1 from '../assets/profile1.jpg'
import Areas from './Area';
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Dasboardview = () => {
  const [getdoctors, setGetDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:5001/user/getAllDoctors");
        setGetDoctors(response.data.slice(0, 2)); // Limit to 3 doctors
      } catch (error) {
        console.log(error);
      }
    };
    getDoctors();
  }, []);


  const [doctorCount, setDoctorCount] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchDoctorCount = async () => {
      try {
        const response = await fetch("http://localhost:5001/user/countDoctors");
        if (!response.ok) {
          throw new Error("Failed to fetch doctor count");
        }
        const data = await response.json();
        setDoctorCount(data.count);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDoctorCount();
  }, []);

  const [nurseCount, setNurseCount] = useState(0);
  useEffect(() => {
    const fetchNurseCount = async () => {
      try {
        const response = await fetch("http://localhost:5001/user/countNurses");
        if (!response.ok) {
          throw new Error("Failed to fetch Nurse count");
        }
        const data = await response.json();
        setNurseCount(data.count);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchNurseCount();
  }, []);
  const [patientCount, setPatientCount] = useState(0);
  useEffect(() => {
    const fetchPatientCount = async () => {
      try {
        const response = await fetch("http://localhost:5001/patient/countPatients");
        if (!response.ok) {
          throw new Error("Failed to fetch Patient count");
        }
        const data = await response.json();
        setPatientCount(data.count);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPatientCount();
  }, []);
  const [getpatients, setGetPatients] = useState([]);
  useEffect(() => {
    const getPatients = async () => {

      try {
        const response = await axios.get(`http://localhost:5001/patient/getAllPatients`);
        setGetPatients(response.data.slice(0, 3));
      }
      catch (error) {
        console.log(error);

      }
    }
    getPatients();
  }, []);
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
    <div className='dash'>
      <div className="widgets">
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaBedPulse className="ordericon" />

            </div>
            <div className="texts">
              {error ? (
                <p style={{ color: "red", fontSize: "1.5rem" }}>{error}</p>
              ) : (
                <>
                  <p>{patientCount}</p>
                  <span>Total Patients</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaUserDoctor className="pageicon" />

            </div>
            <div className="texts">
              {error ? (
                <p style={{ color: "red", fontSize: "1.5rem" }}>{error}</p>
              ) : (
                <>
                  <p>{doctorCount}</p>
                  <span>Available Doctors</span>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <div className="widget">
          <div className="top">
            <div className="icon-container">
              <MdMedicationLiquid className="totalicon" />

            </div>
            <div className="texts">
              <p><br /></p>
              <span>Pharmacy Medics</span>
            </div>
          </div>
        </div> */}
        <div className="widget">
          <div className="top">
            <div className="icon-container">
              <FaUserNurse className="downloadicon" />

            </div>
            <div className="texts">
              {error ? (
                <p style={{ color: "red", fontSize: "1.5rem" }}>{error}</p>
              ) : (
                <>
                  <p>{nurseCount}</p>
                  <span>Available Nurses</span>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="area">
          <p>Hospital Visits Statistics</p> <br />
          <Areas />
        </div>
        <section className="doctors-list">
          <div className="doctors-header">
            <h2>Doctors List</h2>
          </div>
          {getdoctors.map((doctor) => (
            <div className="doctor-card" key={doctor._id}>
              <img src={doctor.profileImage} alt="Doctor" />
              <div className="doctor-info">
                <h3>{doctor.userName}</h3>
                <p>{doctor.Speciality}</p>
              </div>
            </div>))}
          <button className="view-all"><Link to='/all-doctors' className='nav-link'>View all doctors</Link></button>

        </section>

      </div>
      {/* <div className="sec-widgets">
        <div className="card-modal">
          <div className="top-part">
            <h4>Recent Visits</h4>
            <div className="ico">
              <MdKeyboardArrowUp />
              <IoSettingsSharp />
              <MdOutlineClose />
            </div>
          </div>
        </div>
        <div className="card-modal">
          <div className="top-part">
            <h4>Operation Success Rate </h4>
            <div className="ico">
              <MdKeyboardArrowUp />
              <IoSettingsSharp />
              <MdOutlineClose />
            </div>
          </div>
        </div>
        <div className="card-modal">
          <div className="top-part">
            <h4>Pharmacy Orders</h4>
            <div className="top-icon">
              <MdKeyboardArrowUp />
              <IoSettingsSharp />
              <MdOutlineClose />
            </div>
          </div>
        </div>
      </div> */}
      <div className="third-section">
        <div className="table-section">
          <div className="top-section">
            <h2>Patients</h2>
            <button className='add-btn'><Link to="/add-patient" className='nav-link'>+Add Patient</Link></button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Full Names</th>
                <th>National Id</th>
                <th>Gender</th>
                <th>Age</th>
                {/* <th>E-mail</th> */}
                <th>Disease</th>
                <th colSpan={2} >Action</th>
              </tr>
            </thead>
            <tbody>
              {getpatients.map((patient) => (
                <tr key={patient._id}>
                  <td>{patient.patientName}</td>
                  <td>{patient.patientId}</td>
                  <td>{patient.patientGender}</td>
                  <td>{patient.patientAge}</td>
                  {/* <td>{patient.patientEmail}</td> */}
                  <td>{patient.patientDisease}</td>
                  <td>
                    {/* <Link to={`/doctor/edit-patientform/${patient._id}`}> */}
                    <MdModeEdit className='edit' />
                    {/* </Link> */}
                  </td>
                  <td><MdDelete className='delete'
                   onClick={() => handleDelete(patient._id)}
                  /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-section" style={{marginTop:"0rem"}}>
          <div className="top-section"><h2>Support Requests</h2></div>
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
                          <button className="edit" type="submit" style={{ padding: "5px 10px", cursor: "pointer" }}>
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
    </div>
  )
}

export default Dasboardview
