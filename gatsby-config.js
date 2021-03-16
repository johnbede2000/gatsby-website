require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'John Cervantes | Jazz Pianist & Composer',
    titleTemplate: '%s | John Cervantes - jazz pianist & composer',
    description:
      'The website of London jazz pianist & composer John Cervantes. Including streaming music, videos, news, and live events.',
    siteUrl: 'https://wwww.johncervantes.co.uk', // No trailing slash allowed!
    image:
      'https://res.cloudinary.com/dd23iaiap/image/upload/v1606216949/www.johncervantes.co.uk_about.html_iPad_ydzupr.png', // Or use path to an image placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/success`],
      },
    }`gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            { family: `Poppins`, variants: [`400`, `700`] },
            { family: `Jura`, variants: [`400`, `700`] },
            { family: `Bebas Neue`, variants: [`400`, `700`] },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Cervantes | Jazz Pianist & Composer`,
        description: `Find out more and keep up to date with John Cervantes.`,
        short_name: `J Cervantes`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
};
