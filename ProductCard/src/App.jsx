import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <ProductCard
        name="Wireless Headphones"
        price="99.99"
        imageUrl="https://via.placeholder.com/200"
      />
      <ProductCard
        name="Smart Watch"
        price="149.99"
        imageUrl="https://via.placeholder.com/200"
      />
    </div>
  );
}

export default App;
