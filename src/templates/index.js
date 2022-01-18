import * as React from "react"
import Layout from "../components/Layout"
import FeaturesSection from "../components/FeaturesSection"
import HeroSection from "../components/HeroSection"
import TestimonialsSection from "../components/TestimonialsSection"
import BlogSection from "../components/BlogSection"
import Spinner from "../components/Spinner"
import ScrollToTop from "../components/ScrollToTop"
import NoApiTokenSection from "../components/NoApiTokenSection"
import TwoColumnWithImageSection from "../components/TwoColumnWithImageSection"
import Header from "../containers/Header"
import Footer from "../containers/Footer"

// markup
const IndexPage = ({ pageContext: { pageData, menuData } }) => {
  console.log(pageData)
  console.log(menuData)

  if (pageData && pageData.errors) {
    return <h1>je tu chyba</h1>
  } else {

  const bodyElements = pageData.data.butterPage.body
  const blogPosts = pageData.data.allButterPost.nodes
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout>
      <Spinner />
      <Header menuItems={menuItems} />

      <NoApiTokenSection />

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

export default IndexPage
