import React from "react";
import "./App.css";

function TestimonialCard({ name, quote, rating }) {
  // Render stars based on rating prop
  const stars = Array(rating).fill("⭐");

  return (
    <div className="testimonial-card">
      <p className="quote">"{quote}"</p>
      <div className="rating">{stars}</div>
      <h4 className="name">- {name}</h4>
    </div>
  );
}

export default TestimonialCard;
