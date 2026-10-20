import React from "react";
import "./App.css";

function BlogCard({ title, summary, author, date, featured }) {
  return (
    <div className="blog-card">
      {featured && <span className="featured-badge">Featured</span>}
      <h3>{title}</h3>
      <p className="summary">{summary}</p>
      <p className="meta">By {author} | {date}</p>
    </div>
  );
}

export default BlogCard;
