import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../dashboardstyles/addDoctor.css'; // Optional: you can style the form here

const EditDoctorForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState({
    userName: '',
    Gender: '',
    userAge: '',
    userEmail: '',
    Speciality: '',
    userDescription: '',
  });
  const [profileImage, setProfileImage] = useState(null); // Store the file separately

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/user/getDoctorById/${id}`);
        setDoctor(response.data);
      } catch (error) {
        console.log('Error fetching doctor:', error);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]); // Store the file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // Append form fields
      formData.append('userName', doctor.userName);
      formData.append('Gender', doctor.Gender);
      formData.append('userAge', doctor.userAge);
      formData.append('userEmail', doctor.userEmail);
      formData.append('Speciality', doctor.Speciality);
      formData.append('userDescription', doctor.userDescription);
      
      // Append profile image if available
      if (profileImage) {
        formData.append('profileImage', profileImage);
      }

      // Send form data to backend
      await axios.put(`http://localhost:5001/user/doctorUpdate/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Doctor updated successfully!');
      navigate('/doctor-view'); // Redirect to doctor table page after successful update
    } catch (error) {
      console.log('Error updating doctor:', error);
      alert('Failed to update doctor');
    }
  };

  return (
    <div className="forms">
      <div className="heades-container">
          <h1 className="heades-title">EDIT DOCTOR INFORMATION</h1>
        </div>
      <form onSubmit={handleSubmit}>
      <h2>Doctor info</h2>
          <label>Full Name:</label>
          <input
            type="text"
            name="userName"
            value={doctor.userName}
            onChange={handleChange}
            required
          />
          <label>Gender:</label>
          <input
            name="Gender"
            value={doctor.Gender}
            onChange={handleChange}
            required
          />
          <label>Age:</label>
          <input
            type="number"
            name="userAge"
            value={doctor.userAge}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="userEmail"
            value={doctor.userEmail}
            onChange={handleChange}
            required
          />
          <label>Speciality:</label>
          <input
            type="text"
            name="Speciality"
            value={doctor.Speciality}
            onChange={handleChange}
            required
          />
          {/* <label>Profile Image:</label>
          <input
            type="file"
            name="profileImage"
            onChange={handleFileChange}
          /> */}
          <label>Doctor Description</label>
          <textarea
            name="userDescription"
            value={doctor.userDescription}
            onChange={handleChange}
            placeholder="Doctor Description"
          ></textarea>
        <button type="submit" className="doctor-btn">Update Doctor</button>
      </form>
    </div>
  );
};

export default EditDoctorForm;
