// ProductCard.jsx
import React from "react";

function ProductCard({ name, price, imageUrl }) {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>${price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  name: {
    fontSize: "18px",
    margin: "10px 0",
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductCard;
