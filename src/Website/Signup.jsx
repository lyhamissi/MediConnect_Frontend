import React from 'react'
import '../styles/login.css';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import heroimage from '../assets/hospital.jpg'

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = async (data) => {
  console.log("Form data submitted: ", data);
    try {
      const { userName, userEmail, userPassword } = data;
      const formData = {
        userName,
        userEmail,
        userPassword,
      };

      const response = await axios.post(`http://localhost:5001/user/register`, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === 201) {
        Notify.success("Account Created Successfully");
        reset();
        setTimeout(() => navigate("/login"), 1000);
      } else {
        Notify.failure("Signup failed. Please try again.");
      }
    }
    catch (error) {
      console.log(error);
      Notify.failure("Something went wrong. Please try again.");
    }
  }
  return (
    <div className="login">
    <div className='login-container'>
      {/* <div className="hero-section">
        <img src={heroimage} alt="" />
      </div> */}
      <div className="form-section">
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          <h2 >Sign Up</h2>
          <label>Full Names*</label>
          <input type="text"placeholder='Full Names*' name='userName' {...register("userName", { required: true })} />
          <label>E-mail*</label>
          <input type="email" placeholder='Enter Your Email' name='userEmail' {...register("userEmail", { required: true })} />
          <label>Password*</label>
          <input type="password" placeholder='Enter Password' name='userPassword' {...register("userPassword", { required: true })} />
          <button className='login-btn' type='submit'>Sign Up</button>
          <div className="signup-link">
         <p> Already have an account?</p><Link to='/login'>Login here!!</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
