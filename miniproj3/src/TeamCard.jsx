import React from "react";
import "./App.css";

function TeamCard({ name, designation, photo }) {
  return (
    <div className="team-card">
      <div className="photo-placeholder">
        <img src={photo} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{designation}</p>
    </div>
  );
}

export default TeamCard;
