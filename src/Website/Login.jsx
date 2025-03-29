import React, { useState } from 'react';
import '../styles/logins.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false); // 👈 Add loading state

  const onsubmit = async (data) => {
    setLoading(true); // 👈 Start loading when login begins
    try {
      const response = await axios.post(`http://localhost:5001/user/login`, data, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        Notify.success("Login Successful");
        const userToken = response.data;
        localStorage.setItem("userToken", JSON.stringify(userToken));
        const role = userToken?.user?.userRole;

        if (role === "admin") {
          sessionStorage.setItem("AdminId", userToken.user?._id);
          sessionStorage.setItem("AdminName", userToken.user?.userName);
          sessionStorage.setItem("AdminProfile", userToken.user?.profileImage);
          navigate("/dashboard");
        } else if (role === "patient") {
          sessionStorage.setItem("token", userToken.user?.token);
          sessionStorage.setItem("PatientId", userToken.user?._id);
          sessionStorage.setItem("PatientName", userToken.user?.userName);
          navigate("/patient/patient-pro");
        } else if (role === "doctor") {
          sessionStorage.setItem("doctorId", userToken.user?._id);
          sessionStorage.setItem("DoctorName", userToken.user?.userName);
          sessionStorage.setItem("DoctorProfile", userToken.user?.profileImage);
          navigate("/doctor/dash");
        } else {
          navigate("/home");
        }
      } else {
        Notify.failure("Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      Notify.failure("An error occurred. Please try again.");
    }
    setLoading(false); // 👈 Stop loading after login attempt
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="form-section">
          <form onSubmit={handleSubmit(onsubmit)}>
            <h2>Welcome Back!</h2>

            <label>Email*</label>
            <input type="email" placeholder="Enter your email" {...register("userEmail", { required: true })} />
            {errors.userEmail && <span className="error" style={{ fontSize: "1rem", color: "red" }}>Email is required</span>}

            <label>Password*</label>
            <input type="password" placeholder="Enter your password" {...register("userPassword", { required: true })} />
            {errors.userPassword && <span className="error" style={{ fontSize: "1rem", color: "red" }}>Password is required</span>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"} {/* 👈 Change button text dynamically */}
            </button>

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
