import React from 'react'
import '../dashboardstyles/addDoctor.css';
import { useForm } from 'react-hook-form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
const AddPatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onsubmit = async (data) => {
    try {
      const { patientName,patientEmail,patientId,patientAge,patientGender,patientPhone ,patientHeight,patientKgs} = data;
      const formData = {
        patientName,
        patientEmail,
        patientId,
        patientAge,
        patientGender,
        patientPhone,
        patientHeight,
        patientKgs,
      };
      const response = await axios.post(`http://localhost:5001/patient/patientRegister`, formData, {
        headers: {
          "Content-Type": "application/json"
        }
      });  
      if(response.status === 201){
        Notify.success("Patient Added Successfully");
        reset();
      } 
      else{
        Notify.failure("Registration Failed. Please try again!!");
      }
     }
    catch (error) {
      console.log(error);
      Notify.failure("Something went wrong. Please try again!!");
    }
  }
  return (
    <div>
      <div className="forms">
        <div className="heades-container">
          <h1 className="heades-title">ADD NEW PATIENT</h1>
        </div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <h2>Patient info</h2>
          <label className='label'>Name</label>
          <input type="text" placeholder='Full Names' name='patientName' {...register("patientName", {required: true})}/>
          <label >Email</label>
          <input type="email" placeholder='Email'name='patientEmail' {...register("patientEmail", {required: true})} />
          <label >National Id</label>
          <input type="text" placeholder='National Id'name='patientId' {...register("patientId", {required: true})} />
          <label >Age</label>
          <input type="text" placeholder='Age' name='patientAge' {...register("patientAge", {required: true})}/>
          <label >Gender</label>
          <input type="text" placeholder='Gender' name='patientGender' {...register("patientGender", {required: true})}/>
          <label >Phone</label>
          <input type="text" placeholder='Phone Number'name='patientPhone' {...register("patientPhone", {required: true})} />
          {/* <label >Disease</label>
          <input type="text" placeholder='Patient Disease' name='patientDisease' {...register("patientDisease", {required: true})}/> */}
          <label >Height</label>
          <input type="text" placeholder='Patient Height (Cm)'name='patientHeight' {...register("patientHeight", {required: true})} />
          <label >Weight</label>
          <input type="text" placeholder='Patient Weight (Kgs)' name='patientKgs' {...register("patientKgs", {required: true})}/>
          {/* <textarea  id="" placeholder='Notes for Patient include Medications given' name='patientDescription' {...register("patientDescription", {required: true})}></textarea> <br /> */}
          <button className='doctor-btn' type='submit'>Save</button>
          {/* <button type="reset" value="Cancel" className='cancel' >Cancel</button> */}
        </form>
      </div>
    </div>
  )
}

export default AddPatient
