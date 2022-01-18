exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
        sort: {order: ASC, fields: published}
        filter: {status: {eq: "published"}}
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

  // if (landingPage.errors) {
  //   createPage({
  //     path: `/`,
  //     component: require.resolve(`./src/pages/404.js`),
  //     context: {
  //     },
  //   });
  // } else {
    createPage({
      path: `/`,
      component: require.resolve(`./src/templates/index.js`),
      context: {
        pageData: landingPage,
        menuData: menuItemsData
      },
    });
  // }
}
