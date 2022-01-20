import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Spinner from "../components/Spinner"
import ScrollToTop from "../components/ScrollToTop"
import NoApiTokenSection from "../components/NoApiTokenSection"
import BlogPostsSection from "../components/BlogPostsSection"
import BlogPostsList from "../components/BlogPostsList"
import SEO from "../components/SEO"
import Header from "../containers/Header"
import Footer from "../containers/Footer"

const BlogPage = ({ location, pageContext: { pageData, menuData, categories, pageType, mainEntityName } }) => {
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  let [blogPosts, setBlogPosts] = useState(pageData.data.allButterPost.nodes);

  useEffect(() => {
    setLoader(true);
  }, []);

  useEffect(async () => {
    const urlParams = new URLSearchParams(location.search);
    const urlQuery = urlParams.get("q");

    if (location.pathname === '/blog/search') {
      // FIXME: no possibility to search via GraphQL cause the API key may leak
      const searchPosts = urlQuery ? blogPosts.filter(post => post.title.match(new RegExp(urlQuery, "mi"))) : blogPosts
      setBlogPosts(searchPosts);
    }

    setQuery(urlQuery);
    setLoader(false);
  }, []);

  if (loader) return (<Spinner />)

  return (
    <Layout>
      <SEO title={mainEntityName || (query && `Search results for ${query}`) || "Blog"} description={ mainEntityName ? `All posts for ${mainEntityName || query}` : "All ButterCMS blog posts"} />
      <Header menuItems={menuItems} />

      <BlogPostsSection type={pageType} text={mainEntityName || query} />
      <BlogPostsList blogPosts={blogPosts} categories={categories} />

      <ScrollToTop />
      <Footer menuItems={menuItems} />
    </Layout>
  )
}

export default BlogPage
