module.exports = {
  siteMetadata: {
    title: 'John Cervantes | Jazz Pianist & Composer',
    siteURL: 'https://wwww.johncervantes.co.uk',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    // 'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Jura', 'Bebas Neue'],
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
  ],
};
