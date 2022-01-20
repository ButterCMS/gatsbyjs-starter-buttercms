import React from "react"
import Layout from "../containers/Layout"
import FeaturesSection from "../components/FeaturesSection"
import HeroSection from "../components/HeroSection"
import TestimonialsSection from "../components/TestimonialsSection"
import BlogSection from "../components/BlogSection"
import TwoColumnWithImageSection from "../components/TwoColumnWithImageSection"
import SEO from "../components/SEO";

const IndexPage = ({ pageContext: { pageData, menuData } }) => {
  const bodyElements = pageData.data.butterPage.body
  const blogPosts = pageData.data.allButterPost.nodes
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  return (
    <Layout menuItems={menuItems}>
      <SEO { ...pageData.data.butterPage.seo } />

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
    </Layout>
  )
}

export default IndexPage
