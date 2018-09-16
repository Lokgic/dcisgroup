module.exports = {
  siteMetadata: {
   title: `MX Laboratory`,
   structure:["research","news","publications","people"]
 },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typo.js`,
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
