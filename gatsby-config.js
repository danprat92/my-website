module.exports = {
  siteMetadata: {
    title: `Daniel Prato`,
    description: `Website to showcase my abilities`,
    author: `Daniel Prato <daniel.pratog@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dprato-website`,
        short_name: `dprato`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#63d488`,
        display: `minimal-ui`,
        icon: `src/images/me.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
