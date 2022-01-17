module.exports = {
  siteMetadata: {
    title: `ButterCMS Gatsby.js`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-buttercms`,
      options: {
        authToken: `<API_TOKEN>`,
        // Optional array of Collection key
        contentFields: {
          keys: [`collection_key`],
          // Optional. Set to 1 to enable test mode for viewing draft content.
          test: 0,
        },
        // Optional array of page type keys
        pageTypes: [`page_type_key`],
        // Optional array of locales (if configured in your account)
        locales: [`en`, `es`, `fr`],
        preview: 1, // Return draft content
        levels: 2 // Optional. Defaults to 2. Defines the levels of relationships to serialize
      },
    }
  ]
}
