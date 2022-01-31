import * as React from "react"
import { Link } from "gatsby"

const BlogPostsSection = ({ type, text }) => {
  let renderSection;

  switch (type) {
    case "blog":
      renderSection = (
        <div className="section-title text-center">
          <h2>All Blog Posts</h2>
          <ul className="breadcrumb-nav">
            <li><Link to="/">Home</Link></li>
            <li>All blog posts</li>
          </ul>
        </div>
      )
      break;
    case "category":
      renderSection = (
        <div className="section-title text-center">
          <h2>Blog Posts by Category</h2>
          <ul className="breadcrumb-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>Category: {text}</li>
          </ul>
        </div>
      )
      break;
    case "tag":
      renderSection = (
        <div className="section-title text-center">
          <h2>Blog Posts by Tag</h2>
          <ul className="breadcrumb-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>Tag: {text}</li>
          </ul>
        </div>
      )
      break;
    case "search":
      renderSection = (
        <div className="section-title text-center">
          <h2>Search Results</h2>
          <ul className="breadcrumb-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>Search: {text}</li>
          </ul>
        </div>
      )
      break;
    default:
      throw new Error("Invalid type for blog post section");
  }

  return (
    <section id="blog-roll" className="blog-roll-nav">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {renderSection}
          </div>
        </div>
      </div>
    </section>)
}

export default BlogPostsSection;
