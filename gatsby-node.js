const butterCmsApiKey = process.env.BUTTERCMS_API_KEY
const butterCmsPreview = process.env.BUTTERCMS_PREVIEW === "true" || process.env.BUTTERCMS_PREVIEW === "1"
const butterSdk = require("buttercms");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const butter = butterSdk(butterCmsApiKey, butterCmsPreview);

  const landingPage = await graphql(`
    query {
      butterPage(slug: {eq: "landing-page-with-components"}) {
        seo {
          title
          description
        }
        body {
          fields {
            headline
            subheadline
            scroll_anchor_id
            button_label
            button_url
            image
            image_position
            testimonial {
              name
              quote
              title
            }
            features {
              description
              headline
              icon
            }
          }
          type
        }
      }
      allButterPost(
        limit: 2
        sort: {order: DESC, fields: published}
        filter: {status: {in: ["published" ${butterCmsPreview ? ", \"draft\"" : ""}]}}
      ) {
        nodes {
          title
          summary
          url
          featured_image
          featured_image_alt
        }
      }
    }
  `)

  const blogPageDataQuery = async (category, tag) => await graphql(`
    query {
      allButterPost(
        sort: {order: DESC, fields: published}
        filter: {
          status: {in: ["published" ${butterCmsPreview ? ", \"draft\"" : ""}]},
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
          meta_description
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

  const menuItemsData = await graphql(`
    query {
      butterCollection(key: {eq: "navigation_menu"}) {
        value {
          menu_items {
            label
            url
          }
        }
      }
    }
  `)

  // FIXME: no possibility to query categories and tags via GraphQL
  let categories = (await butter.category.list()).data.data;
  let tags = (await butter.tag.list()).data.data;

  const allBlogPosts = await blogPageDataQuery()

  createPage({
    path: `/`,
    component: require.resolve(`./src/templates/index.js`),
    context: {
      pageData: landingPage,
      menuData: menuItemsData
    },
  });

  // blog index
  createPage({
    path: `/blog`,
    component: require.resolve(`./src/templates/blog.js`),
    context: {
      pageData: allBlogPosts,
      menuData: menuItemsData,
      categories,
      pageType: "blog"
    },
  });

  // search
  createPage({
    path: `/blog/search`,
    component: require.resolve(`./src/templates/blog.js`),
    context: {
      pageData: allBlogPosts,
      menuData: menuItemsData,
      categories,
      pageType: "search",
    },
  });

  // categories
  for (const category of categories) {
    const categoryPosts = await blogPageDataQuery(category.slug, null)
    createPage({
      path: `/blog/category/${category.slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: {
        pageData: categoryPosts,
        menuData: menuItemsData,
        categories,
        pageType: "category",
        mainEntityName: category.name
      },
    });

  }

  // tags
  for (const tag of tags) {
    createPage({
      path: `/blog/tag/${tag.slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: {
        pageData: await blogPageDataQuery(null, tag.slug),
        menuData: menuItemsData,
        categories,
        pageType: "tag",
        mainEntityName: tag.name
      },
    });
  }

  // blog posts
  allBlogPosts.data.allButterPost.nodes.map(article => {
    createPage({
      path: `/blog/${article.slug}`,
      component: require.resolve(`./src/templates/article.js`),
      context: {
        pageData: article,
        menuData: menuItemsData,
        categories
      },
    });
  })

}
