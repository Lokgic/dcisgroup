module.exports = {
  siteMetadata: {
   title: `The Ryser Research Collective`,
   structure:["research","news","publications","people","contact"]
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
    {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
    {
      resolve: "gatsby-remark-external-links",
      options: {
        target: "_blank",
      }
    }
    ]
  }
},
  ],
}
