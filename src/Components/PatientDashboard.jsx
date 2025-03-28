import React from "react";
import "../dashboardstyles/patient.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import profile from '../assets/profile1.jpg'
import { BsAlarm } from "react-icons/bs";
const data = [
  { name: "Jan", BloodPressure: 30, HeartRate: 35 },
  { name: "Feb", BloodPressure: 60, HeartRate: 30 },
  { name: "Mar", BloodPressure: 65, HeartRate: 40 },
  { name: "Apr", BloodPressure: 80, HeartRate: 65 },
  { name: "May", BloodPressure: 40, HeartRate: 50 },
  { name: "Jun", BloodPressure: 90, HeartRate: 70 },
  { name: "Jul", BloodPressure: 70, HeartRate: 50 },
];
const activitiesData = [
  { subject: "Eating", A: 80, B: 50, fullMark: 100 },
  { subject: "Drinking", A: 70, B: 40, fullMark: 100 },
  { subject: "Sleeping", A: 90, B: 60, fullMark: 100 },
  { subject: "Designing", A: 85, B: 55, fullMark: 100 },
  { subject: "Coding", A: 95, B: 45, fullMark: 100 },
  { subject: "Cycling", A: 65, B: 30, fullMark: 100 },
  { subject: "Running", A: 75, B: 80, fullMark: 100 },
];

const PatientDashboard = () => {
  return (
    <div >
      <div className="dashboard-container">
        <div className="patient-info-card">
          <img src={profile} alt="Patient" className="profile-pic" />
          <h2>Smith Wright</h2>
          <p>Patient Info</p>
          <div className="info-grid">
            <div>Gender: Female</div>
            <div>Age: 23</div>
            <div>Height: 176 cm</div>
            <div>Weight: 67 kg</div>
          </div>
          <div className="reminder-alarm"><BsAlarm className="alarm" /><span>Reminder Alarm:<br />Ask about medicine </span></div>
        </div>

        <div className="chart-section">
          <h3>Blood Levels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="BloodPressure" fill="#2979ff" />
              <Bar dataKey="HeartRate" fill="#2978ff93" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="notif">
          <h3>Notifications</h3>
          <ul>
            <li>You confirmed Dr. Sultad's visit <br />(27 July - 05:34)</li>
            <li>Reminder: Treatment Time! <br />(25 July - 20:00)</li>
            <li>You completed Dr. Joun's visit<br /> (26 Feb - 23:47)</li>
            <li>Your blood check is good!<br /> (23 Jan - 21:45)</li>
            <li>You cancelled Dr. Wall Smith's visit <br />(17 Nov - 12:23)</li>
          </ul>
        </div>

        <div className="health-info">
          <h3>Health Information</h3>
          <p>Blood Type: AB+</p>
          <p>Allergies: Penicillin, Peanuts</p>
          <p>Diseases: Diabetes</p>
          <p>Blood Pressure: 130/80 mmHg</p>
          <p>Temperature: 36.8°C</p>
        </div>

        <div className="regular-checkups">
          <h3>Regular Checkups</h3>
          <p>Dr. Anthony Wager - Dermatologist</p>
          <p>Dr. Smith Wright - Clinical Doctor</p>
          <p>Dr. Tom Humpton - Dentist</p>
          <p>Dr. Riphatt Jion - Surgeon</p>
        </div>
        <div className="patient-vitals">
          <h3>Patient Vitals</h3>
          <div className="vital-card">Blood Pressure: <strong> 120/89 mmHg</strong></div>
          <div className="vital-card">Heart Rate: <strong> 107 Per min</strong></div>
          <div className="vital-card">Glucose Rate: <strong> 97 mg/dl</strong></div>
          <div className="vital-card">Cholesterol: <strong>124 mg/dl</strong></div>
        </div>

        {/* <div className="patient-activities">
          <h3>Patient Activities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={activitiesData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Activity A" dataKey="A" stroke="#0D2B37" fill="#0D2B37" fillOpacity={0.5} />
              <Radar name="Activity B" dataKey="B" stroke="#144355ba" fill="144355ba" fillOpacity={0.8} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div> */}
      </div>
    </div>
  );
};

export default PatientDashboard;