import * as React from "react"
import { Link } from "gatsby"

const BlogWidget = ({ categories }) => {
  return (
    <>
      <div class="sidebar blog-grid-page">
        <div class="widget search-widget">
          <h5 class="widget-title">Search This Site</h5>
          <form action={`/blog/search`} method="get">
            <input type="text" placeholder="Search Here..." />
            <button type="submit"><i class="lni lni-search-alt"></i></button>
          </form>
        </div>
      </div>

      <div class="widget categories-widget">
        <h5 class="widget-title">Categories</h5>
        <ul class="categories-list">
          {categories.map(category => {
            return <li>
              <Link to={`/blog/category/${category.slug}`}>{category.name}</Link>
            </li>
          })}
        </ul>
      </div>

    </>
  )
}

export default BlogWidget;
