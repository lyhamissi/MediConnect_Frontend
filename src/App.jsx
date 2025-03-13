import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboardlayout from './Components/Dashboardlayout'
import DoctorDashboard from './Components/DoctorDashboard'
import Dasboardview from './Components/Dasboardview'
import Layout from './Website/Layout'
import Home from './Website/Home'
import About from './Website/About'
import Contact from './Website/Contact'
import Login from './Website/Login'
import Signup from './Website/Signup'
import AllDoctors from './Components/AllDoctors'
import EditDoctor from './Components/EditDoctor'
import AddDoctor from './Components/AddDoctor'
import DoctorProfile from './Components/DoctorProfile'
import PatientDashboard from './Components/PatientDashboard'
import PatientLayout from './PatientDashboard/PatientLayout'
import NurseLayout from './NurseDasboard/NurseLayout'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' index element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Dashboardlayout />}>
            <Route path='/dashboard' element={<Dasboardview />} />
            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
            <Route path='/patient-dashboard' element={<PatientDashboard />} />
            <Route path='/all-doctors' element={<AllDoctors />} />
            <Route path='/edit-doctor' element={<EditDoctor />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/doctor-profile' element={<DoctorProfile />} />
          </Route>
          <Route path='/' element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          <Route path='/patient' element={<PatientLayout/>}>
          
          </Route>
          <Route path='/nurse' element={<NurseLayout/>}>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
