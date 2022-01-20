import React, { useEffect, useState } from "react"
import Layout from "../containers/Layout"
import Spinner from "../components/Spinner"
import BlogPostsSection from "../components/BlogPostsSection"
import BlogPostsList from "../components/BlogPostsList"
import SEO from "../components/SEO"

const BlogPage = ({ location, pageContext: { pageData, menuData, categories, pageType, mainEntityName } }) => {
  const menuItems = menuData.data.butterCollection.value[0].menu_items

  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  let [blogPosts, setBlogPosts] = useState(pageData.data.allButterPost.nodes);

  useEffect(() => {
    setLoader(true);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const urlQuery = urlParams.get("q");

    if (location.pathname === '/blog/search') {
      // FIXME: no possibility to search via GraphQL cause the API key may leak
      const searchPosts = urlQuery ? blogPosts.filter(post => post.title.match(new RegExp(urlQuery, "mi"))) : blogPosts
      setBlogPosts(searchPosts);
    }

    setQuery(urlQuery);
    setLoader(false);
  }, [query, loader, blogPosts, location]);

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
