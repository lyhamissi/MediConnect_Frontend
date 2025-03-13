import React from 'react'
import '../styles/login.css';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import heroimage from '../assets/hero image.jpg'

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = async (data) => {
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
        setTimeout(() => navigate("/login"), 1000); // Delay navigation for better UX
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
    <div className='signupform'>
      <div className="herosignup">
        <img src={heroimage} alt="" />
        <div className="contentsignup">
        <h5 className='sign'>Sign Up to Get Started!!</h5>
          <h3>"Revolutionizing Healthcare <br /> through Connected Medical <br /> Records"</h3>
          <h5>...A secure platform that connects medical centers,<br /> ensuring patient health records are accessible <br /> anytime, anywhere...</h5>
        </div>
      </div>
      <div className="login-form">
        <h4 className='log'>Sign Up</h4>
        <form action="" onSubmit={handleSubmit(onsubmit)}>
        <label>Full Names*</label>
        <input type="text" name='userName' {...register("userName", {required: true})}/>
        <label>E-mail*</label>
        <input type="email" name='userEmail' {...register("userEmail", {required: true})} />
        <label>Password*</label>
        <input type="password" name='userPassword' {...register("userPassword", {required: true})} />
        <h6 className='login-link'>Already have an account?<Link to='/login' className='nav-link'><li>Login here!!</li></Link></h6>
        <button className='btn' type='submit'>Sign Up</button>
      </form>
      </div>
    </div>
  )
}

export default Signup
