module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-styled-components',
    'react-animations',
    '@fortawesome/react-fontawesome',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    'react-iframe',
    'react-burger-menu',


    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Limelight`,
            variants: [`400`, `700`, `bold`, `regular`]
          },
          {
            family: `Boogaloo`,
            variants: [`400`, `700`, `bold`, `regular`]
          },
          {
            family: `Sonsie One`,
            variants: [`400`, `700`, `bold`, `regular`]
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },

    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'jsmusic1',
        pages: [{
          type: 'Page',
          match: '/:uid',
          path: '/',
          component: require.resolve('./src/templates/page.js')
        }]
      }
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
