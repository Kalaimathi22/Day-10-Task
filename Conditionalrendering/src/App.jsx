import React from 'react';

function App() {
  // Boolean variable to simulate login status
  const isLoggedIn = true; // change to false to test

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        {isLoggedIn ? "Welcome back!" : "Please log in"}
      </h1>
    </div>
  );
}

export default App;
