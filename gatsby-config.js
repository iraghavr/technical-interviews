const URL = "https://www.technicalinterviews.dev"

const publicUrl = process.env.NODE_ENV === "production" ? URL : ""

module.exports = {
  siteMetadata: {
    title: `The Ultimate Guide To The Technical Interview Process`,
    author: "Emma Bostian",
    publicUrl,
    description: `A guide which helps you navigate the technical interview process.`,
    siteUrl: `https://www.technicalinterviews.dev/`,
    social: {
      twitter: `emmabostian`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://emmabostian.us19.list-manage.com/subscribe/post?u=c1b6d709508ce9c50a34b2a23&amp;id=b231a49662",
      },
    },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `questrial`,
          `playfair display\:black`, // you can also specify font weights and styles
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
