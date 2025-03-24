import '../dashboardstyles/addDoctor.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPatientForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    patientName: '',
    patientDisease: '',
    patientDescription: '',
    patientKgs: '',
  });

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/patient/getPatientById/${id}`);
        setPatient(response.data);
      } catch (error) {
        console.log('Error fetching Patient:', error);
      }
    };
    fetchPatient();
  }, [id]);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorId = sessionStorage.getItem("doctorId");

    const patient_new = {
      patientName: patient.patientName.trim(),
      patientDescription: patient.patientDescription.trim(),
      patientDisease: patient.patientDisease.trim(),
      patientKgs: patient.patientKgs.trim(),
    };

    console.log(patient_new);

    try {
      await axios.put(
        `http://localhost:5001/patient/updatePatientById/${id}`,
        { patient: patient_new, doctorId },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      alert('Patient Data Updated Successfully');
      navigate('/doctor/edit-patient');
    } catch (error) {
      console.log('Error updating patient:', error);
      alert('Failed to update patient');
    }
  };

  return (
    <div className="forms">
      <div className="heades-container">
        <h1 className="heades-title">EDIT PATIENT INFORMATION</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Patient Info</h2>
        <label>Full Name:</label>
        <input
          type="text"
          name="patientName"
          value={patient.patientName}
          onChange={handleChange}
          required
        />
        <label>Weight (Kgs):</label>
        <input
          type="text"
          name="patientKgs"
          value={patient.patientKgs}
          onChange={handleChange}
          required
        />
        <label>Disease:</label>
        <input
          type="text"
          name="patientDisease"
          value={patient.patientDisease}
          onChange={handleChange}
          required
        />
        <label>Notes For Patient:</label>
        <textarea
          name="patientDescription"
          value={patient.patientDescription}
          onChange={handleChange}
          placeholder="Patient's notes or description"
          required
        ></textarea>
        <button type="submit" className="doctor-btn">Update Patient</button>
      </form>
    </div>
  );
};

export default EditPatientForm;
