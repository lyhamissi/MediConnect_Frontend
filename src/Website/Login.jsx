import React from 'react';
import '../styles/logins.css';
import { Link, useNavigate } from 'react-router-dom';
import heroimage from '../assets/hero image.jpg';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onsubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/user/login`, data, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        Notify.success(<h6 style={{ fontSize: "1.5rem" }}>"Login Successful"</h6>);
        const userToken = response.data;
        localStorage.setItem("userToken", JSON.stringify(userToken));
        const role = userToken?.user?.userRole;

        if (role === "admin") {
          sessionStorage.setItem("AdminId", userToken.user?._id)
          sessionStorage.setItem("AdminName", userToken.user?.userName)
          navigate("/dashboard");
        }
        else if (role === "patient") navigate("/patient");
        else if (role === "doctor") {
          sessionStorage.setItem("doctorId", userToken.user?._id)
          navigate("/doctor/all-patients");
        }
        else navigate("/home");
      } else {
        Notify.failure("Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      Notify.failure("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login">
    <div className="login-container">
      {/* <div className="hero-section">
        <img src={heroimage} alt="Hero" />
      </div> */}

      <div className="form-section">
        <form onSubmit={handleSubmit(onsubmit)}>
          <h2>Welcome Back!</h2>

          <label>Email*</label>
          <input type="email" placeholder="Enter your email" {...register("userEmail", { required: true })} />
          {errors.userEmail && <span className="error">Email is required</span>}

          <label>Password*</label>
          <input type="password" placeholder="Enter your password" {...register("userPassword", { required: true })} />
          {errors.userPassword && <span className="error">Password is required</span>}
          <button className="login-btn" type="submit">Login</button>
          <div className="signup-link">
            <p>Don't have an account?</p>
            <Link to="/signup">Sign Up here!</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
