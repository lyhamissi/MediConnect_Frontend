import React from 'react'
import '../dashboardstyles/addDoctor.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const AddNurse = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onsave = async (data) => {
    try {
      const { userName, userEmail, userPassword, userAge, Gender, Speciality, phoneNumber, profileImage, userRole } = data;
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("userEmail", userEmail);
      formData.append("userPassword", userPassword);
      formData.append("userAge", userAge);
      formData.append("Gender", Gender);
      formData.append("Speciality", Speciality);
      formData.append("phoneNumber", phoneNumber);
      formData.append("userRole", userRole);
      formData.append("profileImage", profileImage[0]);

      const response = await axios.post(`http://localhost:5001/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      if (response.status === 201) {
        Notify.success("Nurse Added Successfully");
        reset();
      }
      else {
        Notify.failure("Adding Nurse failed. Please try again.");
      }
    }
    catch (error) {
      console.log(error);
      Notify.failure("Something went wrong. Please try again.");
    }
  }
  return (
    <div>
    <div className="forms">
      <div className="heades-container">
        <h1 className="heades-title">ADD NEW NURSE</h1>
      </div>
      <form onSubmit={handleSubmit(onsave)}>
        <h2>Nurse info</h2>
        <label className='label'>Name</label>
        <input type="text" placeholder='Full Names' name='userName' {...register("userName", { required: true })} />
        <label >Date Of Birth</label>
        <input type="text" placeholder='Age' name='userAge' {...register("userAge", { required: true })} />
        <label >Gender</label>
        <input type="text" placeholder='Gender' name='Gender' {...register("Gender", { required: true })} />
        <label >Profile Image</label>
        <input type="file" id="" placeholder='Plofile Image' name='profileImage' {...register("profileImage", { required: true })} />
        <label>Department </label>
        <input type="text" placeholder='Department' name='Speciality' {...register("Speciality", { required: true })} />
        <label >phone</label>
        <input type="text" placeholder='Phone Number' name='phoneNumber' {...register("phoneNumber", { required: true })} />
        <label >Role</label>
        <input type="text" placeholder='Role' name='userRole' {...register("userRole", { required: true })} />
        <label className='label'>Email</label>
        <input type="email" placeholder='E-mail' name='userEmail' {...register("userEmail", { required: true })} />
        <label >Password</label>
        <input type="password" placeholder='Password' name='userPassword' {...register("userPassword", { required: true })} />
        <button className='doctor-btn' type='submit'>Save</button>
        <button type="reset" value="Cancel" className='cancel'  >Cancel</button>
      </form>
    </div>
  </div>
  )
}

export default AddNurse
