import React, { useState } from "react";
import "../styles/NotificationSettings.css";
import SideBar from "../components/sideBar";
import SettingsHead from "../components/settingsHead";
const NotificationSettings = () => {
  const [isNotificationsOn, setIsNotificationsOn] = useState(true);
  const [settings, setSettings] = useState({
    notificationSound: true,
    advertisements: false,
    popUpNotifications: true,
  });

  const handleToggle = () => {
    setIsNotificationsOn(!isNotificationsOn);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings({
      ...settings,
      [name]: checked,
    });
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <div style={{ marginTop: "-50px" }}>
      <SettingsHead />
      <div
        style={{
          display: "flex",
          paddingLeft: "20px",
          paddingBottom: "30px",
          gap: "45px",
        }}
      >
        <SideBar />
        <div className="notification-settings">
          <div className="header">
            <h2>Notifications</h2>
            <label className="switch">
              <input
                type="checkbox"
                checked={isNotificationsOn}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="settings">
            <label>
            <p className="text">
              Notification Sound
              </p>
              <input
                type="checkbox"
                name="notificationSound"
                checked={settings.notificationSound}
                onChange={handleChange}
              />
            </label>
            <label>
              <p className="text">
              Advertisements
              </p>
              <input
                type="checkbox"
                name="advertisements"
                checked={settings.advertisements}
                onChange={handleChange}
              />
            </label>
            <label>
              <p className="text">
              Pop-Up Notifications
              </p>
              <input
                type="checkbox"
                name="popUpNotifications"
                checked={settings.popUpNotifications}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="savechanges">
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
