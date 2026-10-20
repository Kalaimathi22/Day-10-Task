import React from "react";
import TestimonialCard from "./TestimonialCard";
import "./App.css";

function App() {
  const testimonials = [
    { id: 1, name: "Alice", quote: "This product changed my life!", rating: 5 },
    { id: 2, name: "Bob", quote: "Great quality and fast delivery.", rating: 4 },
    { id: 3, name: "Charlie", quote: "Customer support was very helpful.", rating: 5 },
    { id: 4, name: "Diana", quote: "Affordable and reliable.", rating: 3 },
    { id: 5, name: "Ethan", quote: "I recommend it to all my friends.", rating: 4 },
  ];

  return (
    <div className="testimonial-section">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map(t => (
          <TestimonialCard 
            key={t.id} 
            name={t.name} 
            quote={t.quote} 
            rating={t.rating} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
