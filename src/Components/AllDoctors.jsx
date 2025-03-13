import React from 'react'
import DoctorCard from './DoctorCard';
import profile1 from '../assets/profile1.jpg'
const AllDoctors = () => {
  const doctors = [
    {
      name: "Smith Wright",
      speciality: "Clinical Doctor",
      rating: "4.8",
      patients: "1202",
      age: "29",
      points: "2259",
      image:profile1,
    },
    {
      name: "Brooks Latshaw",
      speciality: "Surgeon",
      rating: "4.8",
      patients: "3542",
      age: "45",
      points: "4563",
      image:profile1,
    },
    {
      name: "Cletina Brodeur",
      speciality: "Cardiologist",
      rating: "4.1",
      patients: "2202",
      age: "34",
      points: "4539",
      image:profile1,
    },
    {
      name: " Hyacenthe",
      speciality: "Cardiologist",
      rating: "4.1",
      patients: "2202",
      age: "34",
      points: "4539",
      image:profile1,
    },
    {
      name: "Deborah",
      speciality: "Dentist",
      rating: "4.1",
      patients: "2202",
      age: "34",
      points: "4539",
      image:profile1,
    },
    {
      name: "Afuwah",
      speciality: "Surgeon",
      rating: "4.1",
      patients: "2202",
      age: "34",
      points: "4539",
      image:profile1,
    },
  ];
  return (
    <div>
      <div className="doctor-list">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default AllDoctors
