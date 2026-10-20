import React from "react";
import BlogCard from "./BlogCard";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  const blogPosts = [
    { id: 1, title: "Getting Started with React", summary: "Learn the basics of React and how to build your first app.", author: "Alice", date: "Oct 10, 2026", featured: true },
    { id: 2, title: "Understanding Props and State", summary: "Props and state are the core of React components.", author: "Bob", date: "Oct 12, 2026", featured: false },
    { id: 3, title: "CSS Tricks for Developers", summary: "Improve your styling with these handy CSS tips.", author: "Charlie", date: "Oct 14, 2026", featured: false },
    { id: 4, title: "JavaScript ES6 Features", summary: "Explore modern JavaScript features that make coding easier.", author: "Diana", date: "Oct 15, 2026", featured: true },
    { id: 5, title: "Deploying Apps with Vite", summary: "Learn how to deploy your React apps quickly using Vite.", author: "Ethan", date: "Oct 16, 2026", featured: false },
  ];

  return (
    <div className="app-container">
      <Header />
      <div className="blog-list">
        {blogPosts.map(post => (
          <BlogCard 
            key={post.id} 
            title={post.title} 
            summary={post.summary} 
            author={post.author} 
            date={post.date} 
            featured={post.featured} 
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
