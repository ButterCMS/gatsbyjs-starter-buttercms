import * as React from "react"
import Layout from "../components/Layout"
import FeaturesSection from "../components/FeaturesSection"
import HeroSection from "../components/HeroSection"
import TestimonialsSection from "../components/TestimonialsSection"
import BlogSection from "../components/BlogSection"
import Spinner from "../components/Spinner"
import ScrollToTop from "../components/ScrollToTop"
import TwoColumnWithImageSection from "../components/TwoColumnWithImageSection"
import Header from "../containers/Header"
import Footer from "../containers/Footer"

// markup
const IndexPage = ({ pageContext: { pageData, menuData } }) => {
  console.log(pageData)
  console.log(menuData)

  if (pageData.errors && pageData > 0) {
    return <h1>je tu chyba</h1>
  } else {

  const bodyElements = pageData.data.butterPage.body
  const blogPosts = pageData.data.allButterPost.nodes
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout>
      <Spinner />
      <Header menuItems={menuItems} />

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


      {bodyElements.map((bodyElement, i) => {
        switch (bodyElement.type) {
          case "hero":
            return <HeroSection fields={bodyElement.fields} key={i}/>
          case "two_column_with_image":
            return <TwoColumnWithImageSection fields={bodyElement.fields} key={i}/>
          case "features":
            return <FeaturesSection fields={bodyElement.fields} key={i}/>
          case "testimonials":
            return <TestimonialsSection fields={bodyElement.fields} key={i}/>
          default:
            return null
        }
      })}

      <BlogSection blogPosts={blogPosts} />

      <ScrollToTop />

      <Footer />

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
}

// export const query = graphql`
//   query LandingPageQuery {
//     butterPage(slug: {eq: "landing-page-with-components"}) {
//       seo {
//         title
//         description
//       }
//       body {
//         fields {
//           headline
//           subheadline
//           scroll_anchor_id
//           button_label
//           button_url
//           image
//           image_position
//           testimonial {
//             name
//             quote
//             title
//           }
//           features {
//             description
//             headline
//             icon
//           }
//         }
//         type
//       }
//     }
//     allButterPost(
//       limit: 2
//       sort: {order: ASC, fields: published}
//       filter: {status: {eq: "published"}}
//     ) {
//       nodes {
//         title
//         summary
//         url
//         featured_image
//         featured_image_alt
//       }
//     }
//   }`

export default IndexPage
