import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import '../utils/pub.css'

const PubCont = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin:auto;
`
const pstyle = {
  padding:"50px",
  maxWidth:"1000px",
  margin:"auto",
  lineHeight: "1.5"
}


export default ({data})=>{
  const pubs = data.allFile.edges[0].node.childMarkdownRemark

  return(<Layout>
    <div className = "pubBox" dangerouslySetInnerHTML={{ __html: pubs.html }} />
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
