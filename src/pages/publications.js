import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typo"
import Layout from "../components/layout"
import {FlexConstainer} from '../components/StyComp'
import styled from "styled-components"

const PubCont = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin:auto;
`

export default ({data})=>{
  const pubs = data.allFile.edges[0].node.childMarkdownRemark

  return(<Layout>
    <PubCont dangerouslySetInnerHTML={{ __html: pubs.html }} />
  </Layout>)
}

export const query = graphql`
query {
  allFile(
    filter:{name:{regex:"/(pubs)/"}}
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
