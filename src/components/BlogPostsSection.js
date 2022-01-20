import * as React from "react"
import { Link } from "gatsby"

const BlogPostsSection = ({ type, text }) => {
  return (
    <section id="blog-roll" className="blog-roll-nav">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            {(() => {
              switch (type) {
                case "blog":
                  return (
                    <div className="section-title text-center">
                      <h2>All Blog Posts</h2>
                      <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                        <li>All blog posts</li>
                      </ul>
                    </div>
                  )
                case "category":
                  return (
                    <div className="section-title text-center">
                      <h2>Blog Posts by Category</h2>
                      <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li>Category: {text}</li>
                      </ul>
                    </div>
                  )
                case "tag":
                  return (
                    <div className="section-title text-center">
                      <h2>Blog Posts by Tag</h2>
                      <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li>Tag: {text}</li>
                      </ul>
                    </div>
                  )
                case "search":
                  return (
                    <div className="section-title text-center">
                      <h2>Search Results</h2>
                      <ul className="breadcrumb-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li>Search: {text}</li>
                      </ul>
                    </div>
                  )
                default:
                  throw new Error("Invalid type for blog post section");
              }
            })()
            }

          </div>
        </div>
      </div>
    </section>)
}

export default BlogPostsSection;
