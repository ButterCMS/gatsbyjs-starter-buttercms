require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `ButterCMS Gatsby.js`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: process.env.BUTTER_CMS_API_KEY,
        // Optional array of Collection key
        contentFields: {
          keys: [`navigation_menu`],
          // Optional. Set to 1 to enable test mode for viewing draft content.
          test: 0,
        },
        // Optional array of page type keys
        pageTypes: [`landing-page`],
        // Optional array of locales (if configured in your account)
        locales: [],
        preview: (process.env.BUTTER_CMS_PREVIEW === "true" || process.env.BUTTER_CMS_PREVIEW === "1") ? 1 : 0, // Return draft content
        levels: 2 // Optional. Defaults to 2. Defines the levels of relationships to serialize
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["assets/scss"],
        }
      },
    },
    `gatsby-plugin-react-helmet`
  ]
}
