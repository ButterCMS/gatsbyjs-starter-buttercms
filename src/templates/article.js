import * as React from "react"
import Layout from "../components/Layout"
import Spinner from "../components/Spinner"
import ScrollToTop from "../components/ScrollToTop"
import NoApiTokenSection from "../components/NoApiTokenSection"
import Header from "../containers/Header"
import Footer from "../containers/Footer"
import BlogWidget from "../components/BlogWidget"

const ArticlePage = ({ pageContext: { pageData, menuData, categories } }) => {
  const article = pageData
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout>
      <Spinner />
      <Header menuItems={menuItems} />

      {/* <NoApiTokenSection /> */}

      <section id="blog-header" className="single-post-nav">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>{article.title}</h2>
                <ul className="breadcrumb-nav">
                  <li><a href="/">Home</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li>{article.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-post">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-post">
                <div className="single-post-meta">
                  <h2 className="single-post-header">{article.title}</h2>
                  <ul className="single-post-meta-info">
                    <li>
                      <a href="javascript:void(0)"><img src={article.author.profile_image} alt="#" /> {article.author.first_name} {article.author.last_name}</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><i className="lni lni-calendar"></i> {new Date(article.published).toDateString()}
                      </a>
                    </li>
                    <li>
                      {article.tags.map(tag => {
                        return <a href={`/blog/tag/${tag.slug}`}><i className="lni lni-tag"></i> {tag.name}</a>
                      })}
                    </li>
                  </ul>
                </div>
                <div className="single-post-thumbnail">
                  <img src={article.featured_image} alt={article.featured_image_alt} />
                </div>

                <div className="single-post-body" dangerouslySetInnerHTML={{ __html: article.body }}></div>
              </div>
            </div>

            {/* <!-- Searchbox --> */}
            <aside className="col-lg-4 col-md-12 col-12">
              <BlogWidget categories={categories} />
            </aside>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer menuItems={menuItems} />

      {/* <!-- =================== JS All Templates ========================= --> */}
      {/* <script src="js/bootstrap.min.js"></script>
    <script src="js/polyfill.js"></script>
    <script src="js/main.js"></script> */}

      {/* <!-- ================= JS Index HTML only ========================= --> */}
      {/* <script src="js/tiny-slider.js"></script>
    <script src="js/client-slider.js"></script>
    <script src="js/section-menu.js"></script> */}
    </Layout>
  )
}

export default ArticlePage
