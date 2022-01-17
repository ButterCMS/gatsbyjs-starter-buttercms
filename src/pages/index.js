import * as React from "react"
import Layout from "../components/Layout"
import {Helmet} from "react-helmet";
import { withPrefix } from "gatsby"

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>

      <Helmet>
        <script type="text/javascript" src={withPrefix("js/tiny-slider.js")} />
        <script type="text/javascript" src={withPrefix("js/client-slider.js")} />
        <script type="text/javascript" src={withPrefix("js/section-menu.js")} />
      </Helmet>

      {/* <!-- ========================= preloader start ========================= --> */}
      <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- preloader end --> */}


      {/* <!-- ========================= header start ========================= --> */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="https://buttercms.com">
                    <img src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6" alt="Logo" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <div className="ms-auto">
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="page-scroll active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#tryit">Try It</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll" href="#blog">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div> {/* <!-- navbar collapse --> */}
                </nav> {/* <!-- navbar --> */}
              </div>
            </div> {/* <!-- row --> */}
          </div> {/* <!-- container --> */}
        </div> {/* <!-- navbar area --> */}
      </header>
      {/* <!-- ========================= header end ========================= --> */}

      {/* <!-- ========================= hero no API token ========================= --> */}
      {/* <!--     <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="hero-content">
                <h1>Configure your ButterCMS API Token</h1>
                <p>Please add your API token to XYZ file.</p>
                <a target="_blank" href="https://buttercms.com/join/" className="main-btn btn-hover">
                  Get your free API token</a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <img width="300" src="https://cdn.buttercms.com/9bPtzdJ6QSWkySNjlmyR" alt="">
                <div className="hero-image text-center text-lg-end"></div>
            </div>
          </div>
        </div>
      </section> --> */}
      {/* <!-- ========================= hero-section end ========================= --> */}


      {/* <!-- ========================= hero-section start ========================= --> */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="hero-content">
                <h1>Welcome to your<br className="d-none d-md-block" /> ButterCMS Proof of Concept</h1>
                <p>Use this app as your own proof of concept to explore Butter's capabilities for yourself. When you're ready, host this app and invite your team to try it out all well!</p>

                <a href="https://buttercms.com/pages/" className="main-btn btn-hover">Update this Page in Butter</a>
                <a href="https://buttercms.com/join/">Need an account?</a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="hero-image text-center text-lg-end">
                <img src="https://cdn.buttercms.com/I4KJEOarRHOhy0Ohi8uS" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= hero-section end ========================= --> */}

      {/* <!-- ========================= cta-section start ========================= --> */}
      <section id="about" className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-last order-lg-first">
              <div className="cta-image left-image">
                <img src="https://cdn.buttercms.com/K4G83OQiRVyOpdR3CPuA" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-content-wrapper">
                <div className="section-title">
                  <h2 className="mb-20">ButterCMS is your content backend</h2>
                  <p>Butter has three core content solutions: Pages, Posts, and Collections. Combine this with advanced capabilities like localization, Write API, multi-site + multi-env and Butter is your centralized content backend no matter how much content you're managing.</p>
                  <a href="https://buttercms.com/pages/" className="main-btn btn-hover border-btn mt-30">Update this in Butter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= cta-section end ========================= --> */}

      {/* <!-- ========================= feature-section start ========================= --> */}
      <section id="features" className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-10">
              <div className="section-title mb-60">
                <h2 className="mb-20">This page is built using ButterCMS Components</h2>
                <p>This page is an example of utilizing Butter Components which allow you to build dynamic landing pages by choosing Components from a Component Library. Reuse and reorder Components in any way you want!</p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-feature">
                    <div className="feature-icon">
                      <i className="lni lni-display"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Components on this page</h4>
                      <p>This sample page has four component types: hero, two column with image, features, and testimonials.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-feature">
                    <div className="feature-icon">
                      <i className="lni lni-compass"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Build your own</h4>
                      <p>This page is just an example set of Components. You can build your own custom Component library!</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-feature">
                    <div className="feature-icon">
                      <i className="lni lni-grid-alt"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Reorder them</h4>
                      <p>Components are great because you can reorder them from your Butter dashboard</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-feature">
                    <div className="feature-icon">
                      <i className="lni lni-layers"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Infinite possibilities</h4>
                      <p>Build carousels, call to actions, testimonials, and much more. There's infinite flexbility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= feature-section end ========================= --> */}

      {/* <!-- ========================= cta-section start ========================= --> */}
      <section id="tryit" className="cta-section pt-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="cta-content-wrapper">
                <div className="section-title">
                  <h2 className="mb-20">Customize this page</h2>
                  <p>Try updating the content of this page to reflect your own. You can also explore modifying these components or creating your own in your Butter dashboard.  Learn more about <a href="https://buttercms.com/kb/creating-editing-and-deleting-pages-and-page-types">Page Types</a> and <a href="https://buttercms.com/kb/how-to-modify-components">Components</a>.</p>
                  <a href="https://buttercms.com/pages/" className="main-btn btn-hover border-btn mt-30">Update this in Butter</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-image right-image text-lg-end">
                <img
                  src="https://cdn.buttercms.com/2woWL7tRSZaPChWGIaSN"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= cta-section end ========================= --> */}

      {/* <!-- ========================= testimonial-section start ========================= --> */}
      <section id="testimonials" className="testimonial-section mt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="testimonial-active-wrapper">

                <div className="section-title text-center">
                  <h2 className="mb-20">What our customers say</h2>
                </div>

                <div className="testimonial-active">
                  <div className="single-testimonial">
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="content">
                      <p>A breath of fresh air in the CMS world, once you go headless with butter you'll never go back.</p>
                    </div>
                    <div className="info">
                      <h6>Bryan MacMillan</h6>
                      <p>IT Admin</p>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="content">
                      <p>Super Flexible CMS Solution</p>
                    </div>
                    <div className="info">
                      <h6>Hampton Catlin</h6>
                      <p>Creator of Sass and Haml</p>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="quote">
                      <i className="lni lni-quotation"></i>
                    </div>
                    <div className="content">
                      <p>I was able to quickly draft new pages, circulate them to the team, edit them, and then ultimately publish intuitively.</p>
                    </div>
                    <div className="info">
                      <h6>Kim Kohatsu</h6>
                      <p>CMO</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= testimonial-section end ========================= --> */}

      {/* <!-- ========================= blog-section start ========================= --> */}

      <section id="blog" className="blog-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title text-center">
                <h2>Latest Blog Posts</h2>
                <p>Butter also has a built in blog engine which makes it dead simple
                  to launch a new company blog.
                </p>
                <p>
                  <a
                    href="blog.html"
                    className="main-btn btn-hover mt-5">View All Blog Posts
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-blog">
                <div className="blog-header">
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src="https://cdn.buttercms.com/bGQip1SQSoevxZxIp5Jh"
                    alt=""
                  />
                </div>
                <div className="blog-body">
                  <h5 className="package-name"><a href="#">This is the latest blog post title</a></h5>
                  <p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy
                    eirmod tempor ividunt dolore.</p>
                </div>
                <div className="blog-footer">
                  <a href="#0" className="main-btn btn-hover">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="single-blog">
                <div className="blog-header">
                  <img
                    className="img-fluid"
                    loading="lazy"
                    src="https://cdn.buttercms.com/bGQip1SQSoevxZxIp5Jh"
                    alt="#"
                  />
                </div>
                <div className="blog-body">
                  <h5 className="package-name"><a href="#">This is the latest blog post title</a></h5>
                  <p>Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam nonumy
                    eirmod tempor ividunt dolore.</p>
                </div>
                <div className="blog-footer">
                  <a href="#0" className="main-btn btn-hover">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= blog-section end ========================= */}


      {/* ========================= footer start ========================= */}
      <footer className="footer pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <div className="footer-widget">
                <div className="logo">
                  <a href="https://buttercms.com">
                    <img width="200" src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6" alt="logo" loading="lazy" />
                  </a>
                </div>
                <p className="desc">ButterCMS is your content backend. Build better with Butter.</p>
                <ul className="social-links">
                  <li><a href="#0"><i className="lni lni-facebook"></i></a></li>
                  <li><a href="#0"><i className="lni lni-linkedin"></i></a></li>
                  <li><a href="#0"><i className="lni lni-instagram"></i></a></li>
                  <li><a href="#0"><i className="lni lni-twitter"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
              <div className="footer-widget">
                <h3>About Us</h3>
                <ul className="links">
                  <li><a className="page-scroll active" href="#home">Home</a></li>
                  <li><a className="page-scroll" href="#about">About</a></li>
                  <li><a className="page-scroll" href="#features">Features</a></li>
                  <li><a className="page-scroll" href="#tryit">Try It</a></li>
                  <li><a className="page-scroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="page-scroll" href="#blog">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <h3>Subscribe Newsletter</h3>
                <form action="#">
                  <input type="email" placeholder="Email" />
                  <button className="main-btn btn-hover">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ========================= footer end ========================= --> */}


      {/* <!-- ========================= scroll-top ========================= --> */}
      <a href="#" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up"></i>
      </a>

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

export default IndexPage
