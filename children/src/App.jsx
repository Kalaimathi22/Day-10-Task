import React from "react";
import Wrapper from "./Wrapper";
import ProductCard from "./ProductCard";

function App() {
  return (
    <Wrapper>
      <h2>Featured Products</h2>
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
    </Wrapper>
  );
}

export default App;

