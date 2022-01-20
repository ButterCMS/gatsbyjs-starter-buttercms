import * as React from "react"
import BlogWidget from "./BlogWidget"
import ZeroData from "./ZeroData"
import { Link } from "gatsby"

const BlogPostsList = ({ blogPosts, categories }) => {

  return (
    <section className="blog-posts">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 blog-roll-cards">
            <div className="row">{/* <!--nested row for blogroll--> */}

              {blogPosts.length === 0 && <ZeroData />}

              {blogPosts.map((post, i) => {
                return (<div key={i} className="col-12 col-lg-6">
                  <div className="blog-roll-card">
                    <div className="blog-roll-card-meta">
                      <h2 className="blog-roll-card-header"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
                      <ul className="blog-roll-card-meta-info">
                        <li>
                          <a href="#"><img src={post.author.profile_image} alt="#" />{post.author.first_name} {post.author.last_name}</a>
                        </li>
                        <li>
                          <a href="#"><i className="lni lni-calendar"></i> {new Date(post.published).toDateString()}</a>
                        </li>
                        <li>
                          {post.tags.map((tag, ii) => {
                            return <Link key={ii} to={`/blog/tag/${tag.slug}`}><i className="lni lni-tag"></i> {tag.name}</Link>
                          })}
                        </li>
                      </ul>
                    </div>
                    {post.featured_image && <div className="single-post-thumbnail">
                      <img src={post.featured_image} alt={post.featured_image_alt} />
                    </div>
                    }
                    <div className="blog-roll-card-body">
                      <p dangerouslySetInnerHTML={{ __html: post.summary }}></p>
                    </div>
                    <div className="blog-roll-card-footer text-center">
                      <Link to={`/blog/${post.slug}`} className="main-btn btn-hover">Read More</Link>
                    </div>
                  </div>
                </div>)
              })}

            </div>
          </div>

          {/* <!-- Widgets Column --> */}
          <aside className="col-12 col-lg-4">
            <BlogWidget categories={categories} />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default BlogPostsList;
