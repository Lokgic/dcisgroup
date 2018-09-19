module.exports = {
  siteMetadata: {
   title: `The Ryser Research Collective`,
   structure:["research","news","publications","people"]
 },
  plugins: [
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       name: `src`,
       path: `${__dirname}/src/`,
     },
   },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typo.js`,
      },
    },
     `gatsby-transformer-remark`,
  ],
}
