import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import heroimage from '../assets/hero image.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = async (data) => {
    try {
      const { userEmail, userPassword } = data;
      const formData = { userEmail, userPassword };

      const response = await axios.post(`http://localhost:5001/user/login`, formData, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        Notify.success("Login Successful");
        // reset();

        const userToken = response.data;
        localStorage.setItem("userToken", JSON.stringify(userToken));
        const Role = userToken?.user?.userRole;
        console.log("======================Role",Role)

        if (Role === "admin") {
          navigate("/dashboard");

        } 
        else  if (Role === "patient") {
          navigate("/patient");

        }
        else  if (Role === "nurse") {
          navigate("/nurse");

        }
        else  if (Role === "doctor") {
          navigate("/doctor");

        }
        else {
          navigate("/home");
        }
      } else {
        Notify.failure("Login failed. Please try again.");
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='signupform'>
      <div className="herosignup">
        <img src={heroimage} alt="" />
        <div className="contentsignup">
          <h5 className='welcome'>Welcome Back!!</h5>
          <h3>"Revolutionizing Healthcare <br /> through Connected Medical <br /> Records"</h3>
          <h5>...A secure platform that connects medical centers,<br /> ensuring patient health records are accessible <br /> anytime, anywhere...</h5>
        </div>
      </div>
      <div className="login-form">
        <form onSubmit={handleSubmit(onsubmit)}>
          <h4 className='log'>Login</h4>
          <label>E-mail*</label><br />
          <input type="email" {...register("userEmail", { required: true })} />
          {errors.userEmail && <span className="error">Email is required</span>}

          <label>Password*</label><br />
          <input type="password" {...register("userPassword", { required: true })} />
          {errors.userPassword && <span className="error">Password is required</span>}

          <h6 className='login-link'>
            Don't have an account?
            <Link to='/signup' className='nav-link'><li>Sign Up here!!</li></Link>
          </h6>
          <button className='btn' type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
