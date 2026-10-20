// App.jsx
import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      name: "Wireless Headphones",
      price: "99.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      name: "Smart Watch",
      price: "149.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      name: "Bluetooth Speaker",
      price: "79.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      name: "Gaming Mouse",
      price: "49.99",
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      name: "Mechanical Keyboard",
      price: "89.99",
      imageUrl: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
