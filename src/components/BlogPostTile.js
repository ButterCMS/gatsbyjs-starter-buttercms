import * as React from "react"

const BlogPostTile = (props) => {
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-blog">
        <div className="blog-header">
          <img
            className="img-fluid"
            loading="lazy"
            src={props.featured_image}
            alt={props.featured_image_alt}
          />
        </div>
        <div className="blog-body">
          <h5 className="package-name"><a href="#">{props.title}</a></h5>
          <p>{props.summary}</p>
        </div>
        <div className="blog-footer">
          <a href={`/blog/${props.url}`} className="main-btn btn-hover">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default BlogPostTile;
