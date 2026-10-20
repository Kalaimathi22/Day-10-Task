import React from "react";
import TeamCard from "./TeamCard";
import Header from "./Header";
import "./App.css";

function App() {
  const teamMembers = [
    { id: 1, name: "Alice", designation: "Project Manager", photo: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 2, name: "Bob", designation: "Lead Developer", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 3, name: "Charlie", designation: "UI/UX Designer", photo: "https://images.unsplash.com/photo-1757620765404-a1ee66df5e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 4, name: "Diana", designation: "QA Engineer", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 5, name: "Ethan", designation: "DevOps Specialist", photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  ];

  return (
    <div className="team-section">
      <Header title="Meet the Team" />
      <div className="team-grid">
        {teamMembers.map(member => (
          <TeamCard 
            key={member.id} 
            name={member.name} 
            designation={member.designation} 
            photo={member.photo} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
