import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "99.99", imageUrl: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 2, name: "Smart Watch", price: "149.99", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 3, name: "Bluetooth Speaker", price: "79.99", imageUrl: "https://images.unsplash.com/photo-1589001181560-a8df1800e501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 4, name: "Gaming Mouse", price: "49.99", imageUrl: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 5, name: "Keyboard", price: "89.99", imageUrl: "https://images.unsplash.com/photo-1558050032-160f36233a07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
    { id: 6, name: "HD Monitor", price: "199.99", imageUrl: "https://plus.unsplash.com/premium_photo-1681470644710-99a83651c8c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
  ];

  return (
    <div className="catalog-container">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </div>
  );
}

export default App;
