import React, { useState, useEffect } from "react";
import axios from "axios";
import "../dashboardstyles/settings.css"
const DocSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [message, setMessage] = useState("");

  // Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData({
          userName: response.data.userName,
          userEmail: response.data.userEmail,
          userPassword: "", 
        });
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.put(
        "http://localhost:5001/user/update-profile",
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile. Please try again.");
      console.error(error);
    }
  };
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      {message && <p className="message">{message}</p>}
      <div className="settings-content">
        <section className="settings-section">
          <h3>Profile Settings</h3>
          <form action=""  onSubmit={handleSubmit}>
          <label>
            Name:  <input
            type="text"
            name="userName"
            value={userData.userName}
            onChange={handleChange}
            required
          />
          </label>
          <label>
            Email: <input
            type="email"
            name="userEmail"
            value={userData.userEmail}
            onChange={handleChange}
            required
          />
          </label>
          <button>Save Changes</button>
          </form>
        </section>

        <section className="settings-section">
          <h3>Security</h3>
          
          <form action=""  onSubmit={handleSubmit}>
          <label>
            Change Password: <input
            type="password"
            name="userPassword"
            value={userData.userPassword}
            onChange={handleChange}
            placeholder="Enter new password (optional)"
          />
          </label>
          <button>Update Password</button>
          </form>
        </section>

        <section className="settings-section">
          <h3>Notifications</h3>
          <label>
            Enable Notifications:
            <input
              className="checkbox"
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </label>
        </section>
      </div>
    </div>
  );
};

export default DocSettings;

