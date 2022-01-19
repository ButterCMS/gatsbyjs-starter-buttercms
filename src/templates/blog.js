import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Spinner from "../components/Spinner"
import ScrollToTop from "../components/ScrollToTop"
import NoApiTokenSection from "../components/NoApiTokenSection"
import BlogPostsSection from "../components/BlogPostsSection"
import BlogPostsList from "../components/BlogPostsList"
import Header from "../containers/Header"
import Footer from "../containers/Footer"

// const buttercms = require("buttercms")(process.env.BUTTERCMS_API_KEY)

const blogPageDataQuery = async (category, tag, query) => await graphql(`
query {
  allButterPost(
    sort: {order: ASC, fields: published}
    filter: {
      status: {eq: "published"},
      ${category ? `categories: {elemMatch: {slug: {eq: \"${category}\"}}},` : ""}
      ${tag ? `tags: {elemMatch: {slug: {eq: \"${tag}\"}}},` : ""}
    }
  ) {
    nodes {
      title
      author {
        last_name
        first_name
        profile_image
      }
      summary
      body
      published
      tags {
        name
        slug
      }
      url
      featured_image
      featured_image_alt
      slug
      categories {
        name
        slug
      }
    }
  }
}
`)

const BlogPage = ({ location, pageContext: { pageData, menuData, categories, pageType, mainEntityName } }) => {
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  let [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setLoader(true);
  }, []);

  useEffect(async () => {
    const urlParams = new URLSearchParams(location.search);
    const urlQuery = urlParams.get("query");
    // const searchedPost = await buttercms.post.search(urlQuery);

    setQuery(urlQuery);
    setBlogPosts(searchedPost);
    setLoader(false);
  }, []);

  return (
    <Layout>
      <Spinner />
      <Header menuItems={menuItems} />

      {/* <NoApiTokenSection /> */}

      <BlogPostsSection type={pageType} text={mainEntityName} />
      {/* <BlogPostsList blogPosts={blogPosts} categories={categories} /> */}

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

export default BlogPage
