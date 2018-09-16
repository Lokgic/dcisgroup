module.exports = {
  siteMetadata: {
   title: `MX Laboratory`,
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
