import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typo"
import Layout from "../components/layout"
import {FlexConstainer} from '../components/StyComp'

export default ({data})=>{
  const pubs = data.allFile.edges[0].node.childMarkdownRemark

  return(<Layout>
    <FlexConstainer style={{padding:"20px"}} height = "100vh" dangerouslySetInnerHTML={{ __html: pubs.html }} /> 
  </Layout>)
}

export const query = graphql`
query {
  allFile(
    filter:{relativeDirectory:{regex:"/(data)/"}}
  ) {
    edges {
      node {
        childMarkdownRemark{
          html

        }
      }
    }
  }
}


`
