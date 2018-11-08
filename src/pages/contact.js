import React from "react"
import Layout from "../components/layout"
import {FlexConstainer, breakpoint} from '../components/StyComp'
import {  Link, graphql } from "gatsby"

export default ({data})=>{
    console.log(data)
    return (
    <Layout>
    <FlexConstainer>
        <div 
            style={{padding:"50px"}}
            dangerouslySetInnerHTML={{__html:data.allFile.edges[1].node.childMarkdownRemark.html}}/>
    </FlexConstainer>

    </Layout>

)}


export const query = graphql`
  query{
  site{
    siteMetadata{
      title
      structure
    }
  }

  allFile(
    filter:{name:{regex:"/(contact)/"}}
  ) {
    edges {
      node {
        childMarkdownRemark{
          frontmatter{
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
          excerpt
        }
      }
    }
  }
}

`
