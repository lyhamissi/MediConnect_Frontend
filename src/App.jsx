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
import AddNurse from './Components/AddNurse'
import AllNurses from './Components/AllNurses'
import NurseProfile from './Components/NurseProfile'
import DoctorLayout from './DoctorDashboard/DoctorLayout'
import AddPatient from './DoctorDashboard/AddPatient'
import AllPatients from './Components/AllPatients'
import Patient from './PatientDashboard/Patient'
import DoctorTable from './Components/DoctorTable'
import EditDoctorForm from './Components/EditDoctorForm'
import NurseTable from './Components/NurseTable'
import PatientProfile from './PatientDashboard/PatientProfile'
import PatientPro from './PatientDashboard/PatientPro'
import PatientTable from './DoctorDashboard/PatientTable'
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
            <Route path='/dashboard/edit-doctorform/:id' element={<EditDoctorForm/>}/>
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path="/all-doctors/doctor_profile/:id" element={<DoctorProfile />} />
            <Route path='/all-nurses' element={<AllNurses />} />
            <Route path='/add-nurse' element={<AddNurse />} />
            <Route path='/all-nurses/nurse-profile/:id' element={<NurseProfile />} />
            < Route path='/nurse-doctor' element={<NurseTable/>}/>
            <Route path='/all-patients' element={<AllPatients/>}/>
            <Route path='/dashboard/patient-pro' element={<Patient/>}/>
            <Route path='/doctor-view' element={<DoctorTable/>}/>
          </Route>
          <Route path='/patient' element={<PatientLayout />}>
            <Route path='/patient/patient-pro' element={<Patient/>}/>
            <Route path='/patient/patient-profile' element={<PatientProfile/>}/>
            <Route path='/patient/patientpro/:id' element={<PatientPro/>}/>
          </Route>
          <Route path='/nurse' element={<NurseLayout />}>

          </Route>
          <Route path='/' element={<DoctorLayout />}>
            <Route path='/doctor' element={<DoctorDashboard/>}/>
            <Route path='/doctor/add-patient' element={<AddPatient />} />
            <Route path='/doctor/all-patients' element={<AllPatients/>}/>
            <Route path='/doctor/patient-pro' element={<Patient/>}/>
            <Route path='/doctor/patient-profile/:id' element={<PatientProfile/>}/>
            <Route path='/patientpro/:patientId' element={<PatientPro/>}/>
            <Route path='/doctor/edit-patient' element={<PatientTable/>}/>
            <Route path='/doctor/all-nurses' element={<AllNurses />} />
           < Route path='/doctor/nurse-doctor' element={<NurseTable/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
