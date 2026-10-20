// App.jsx
import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "99.99",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "149.99",
      imageUrl: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "79.99",
      imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "49.99",
      imageUrl: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: "89.99",
      imageUrl: "https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}   // ✅ Correct unique key
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
