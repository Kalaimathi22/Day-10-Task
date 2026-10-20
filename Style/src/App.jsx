import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";   // ✅ Import global styles

function App() {
  return (
    <div className="app-container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
