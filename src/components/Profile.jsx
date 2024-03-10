import React from "react";
import { useUser } from "../contexts/Users";
import "../css/Profile.css";

const Profile = () => {
  const { user, setUser } = useUser();

  const handleNameChange = (event) => {
    setUser((current) => ({ ...current, name: event.target.value }));
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setUser((current) => ({ ...current, avatarUrl: e.target.result }));
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="profile-container">
      <img src={user.avatarUrl} alt="Profile" className="profile-avatar" />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <input
        className="profile-input"
        value={user.name}
        onChange={handleNameChange}
        placeholder="Name"
      />
    </div>
  );
};

export default Profile;
