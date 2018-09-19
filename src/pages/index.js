import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import styled, {css} from "styled-components"
import { rhythm } from "../utils/typo"
import CancerBG from '../imgs/cancer.jpeg'

const Jumbotron = styled.div`
  background:
    linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url(${CancerBG});
  width:100%;
  height:60vh;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  z-index: -1;
  ${'' /* position: absolute; */}
  color: white;
  display: flex;
  flex-wrap: wrap;


`
const Name = styled.div`
  font-size: ${rhythm(3)};
  margin:auto;
  height:auto;
`

const Intro = styled.div`
  font-size: ${rhythm(1)};
  margin: 20px 30px;

`

export default ({data}) => {
  console.log(data.allFile.edges[0].node.childMarkdownRemark.html)
  return (
    <Layout>
      {/* <img src={CancerBG}/> */}
      <Jumbotron>
        {data.site.siteMetadata.title.split(" ").map(d=>(<Name>{d}</Name>))}
        {/* <Name>{data.site.siteMetadata.title}</Name> */}
      </Jumbotron>
      <Intro dangerouslySetInnerHTML={{__html:data.allFile.edges[0].node.childMarkdownRemark.html}}/>
    </Layout>
  )
}




export const query = graphql`
  query{
  site{
    siteMetadata{
      title
    }
  }

  allFile(
    filter:{name:{regex:"/(intro)/"}}
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
