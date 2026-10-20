import React from 'react';

function App() {
  // Define variables
  const name = "Kalaimathi";
  const course = "Web Development with React";
  const today = new Date().toLocaleDateString(); // formats today's date

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, {name} 👋</h1>
      <h2>Course: {course}</h2>
      <p>Today's Date: {today}</p>
    </div>
  );
}

export default App;
