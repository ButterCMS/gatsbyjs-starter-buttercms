import React, { useEffect, useState } from "react"
import Layout from "../containers/Layout"
import Spinner from "../components/Spinner"
import BlogPostsSection from "../components/BlogPostsSection"
import BlogPostsList from "../components/BlogPostsList"
import SEO from "../components/SEO"

const BlogPage = ({ location, pageContext: { pageData, menuData, categories, pageType, mainEntityName } }) => {
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(true);
  const [blogPosts, setBlogPosts] = useState(pageData.data.allButterPost.nodes);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const urlQuery = urlParams.get("query");

    if (location.pathname === '/blog/search/') {
      const searchPosts = urlQuery ? blogPosts.filter(post => post.title.match(new RegExp(urlQuery, "mi")) || post.body.match(new RegExp(urlQuery, "mi"))) : blogPosts
      setBlogPosts(searchPosts);
    }

    setQuery(urlQuery);
    setLoader(false);
  }, []);

  if (loader) return (<Spinner />)

  return (
    <Layout menuItems={menuItems}>
      <SEO title={mainEntityName || (query && `Search results for ${query}`) || "Blog"} description={ mainEntityName ? `All posts for ${mainEntityName || query}` : "All ButterCMS blog posts"} />

      <BlogPostsSection type={pageType} text={mainEntityName || query} />
      <BlogPostsList blogPosts={blogPosts} categories={categories} />
    </Layout>
  )
}

export default BlogPage
