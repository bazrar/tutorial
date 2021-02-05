/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "gatsby tutorial",
    description: "some random description",
    author: "john doe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v9n4f8nwy3ku`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `wUeN-eCWzZGuKmov5nubDJ1MxRHgWI7qQxPrdsyV-gA`,
      },
    },
  ],
}
