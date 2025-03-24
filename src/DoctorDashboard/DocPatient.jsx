// import React, { useState } from "react";

// const Patient = () => {
//     const [patientId, setPatientId] = useState("");
//     const [patientData, setPatientData] = useState(null);
//     const [error, setError] = useState("");

//     // Handle input change
//     const handleChange = (e) => {
//         setPatientId(e.target.value);
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!patientId) {
//             setError("Please enter a valid Patient ID.");
//             return;
//         }

//         try {
//             const response = await fetch(`http://localhost:5001/patient/getPatientByNationalId/${patientId}`);

//             if (!response.ok) {
//                 throw new Error("Patient not found");
//             }

//             const data = await response.json();
//             setPatientData(data);
//             setError(""); // Clear any previous error messages
//         } catch (err) {
//             setError(err.message);
//             setPatientData(null);
//         }
//     };
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DocPatient = () => {
    const [patientId, setPatientId] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!patientId) {
            setError("Please enter a valid Patient ID.");
            return;
        }

        // Navigate to the patient profile page
        navigate(`/doctor/patientpro/${patientId}`);
    };
    return (
        <div>
            <div className="forms">
                <div className="heades-container">
                    <h1 className="heades-title">Insert Your ID to View Your Profile</h1>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Insert ID No' name="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} />
                    <button className='doctor-btn' type='submit' style={{ marginBottom: "1rem" }}>View</button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}

            </div>
        </div>
    )
}

export default DocPatient
