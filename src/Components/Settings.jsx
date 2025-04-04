import React, { useState, useEffect } from "react";
import axios from "axios";
import "../dashboardstyles/settings.css"
const Settings = () => {
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

      // Create a copy and remove password if it's empty
      const updatedData = { ...userData };
      console.log("Sending data:", userData);
      if (!updatedData.userPassword) {
        delete updatedData.userPassword;
      }

      const response = await axios.put(
        "http://localhost:5001/user/update-profile",
        updatedData,
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
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!userData.userPassword) {
        setMessage("Enter a new password before submitting.");
        return;
      }

      const response = await axios.put(
        "http://localhost:5001user/update-password",
        { userPassword: userData.userPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage("Password updated successfully!");
      setUserData({ ...userData, userPassword: "" }); // Clear password field
    } catch (error) {
      setMessage("Error updating password.");
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
          <form action="" onSubmit={handleSubmit}>
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

          <form onSubmit={handlePasswordUpdate}>
            <label>
              Change Password:
              <input
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

        <section className="settings-section" style={{ marginBottom: "2rem" }}>
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

export default Settings;

