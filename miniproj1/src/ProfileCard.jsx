import React from "react";
import "./App.css";

function ProfileCard({ name, role, bio }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
