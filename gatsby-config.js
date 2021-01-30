module.exports = {
  siteMetadata: {
    title: 'John Cervantes | Jazz Pianist & Composer',
  },
  plugins: [
    'gatsby-plugin-postcss', // do I need this? will it disrupt?
    'gatsby-plugin-sharp', // images?
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
  ],
};
