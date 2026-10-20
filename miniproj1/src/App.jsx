import React from "react";
import ProfileCard from "./ProfileCard";
import SkillBadge from "./SkillBadge";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <ProfileCard 
        name="Kalaimathi" 
        role="Web Developer" 
        bio="Passionate about building modern web apps with React and practicing frontend skills."
      />

      <div className="skills-section">
        <h3>Skills</h3>
        <SkillBadge skill="HTML" />
        <SkillBadge skill="CSS" />
        <SkillBadge skill="JavaScript" />
        <SkillBadge skill="React" />
        <SkillBadge skill="Git/GitHub" />
      </div>
    </div>
  );
}

export default App;
