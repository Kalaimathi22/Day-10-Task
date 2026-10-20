import React from "react";
import "./App.css";

function ProductCard({ name, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
