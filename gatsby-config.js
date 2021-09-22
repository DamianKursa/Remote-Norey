require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Norey Remote`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-lottie"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Norey Remote`,
        short_name: `Norey`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#FD7139`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
}
