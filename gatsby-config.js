module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layout/index.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Together Through Skills",
        short_name: "TTS",
        start_url: "/",
        background_color: "#151618",
        theme_color: "#151618",
        display: "standalone",
        icon: "src/assets/images/logos/webdacity/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    }
  ],
  siteMetadata: {
    title: "Together Through Skills",
    author: "Webdacity",
    siteUrl: `https://t-t-s.co.za`,
  },
}
