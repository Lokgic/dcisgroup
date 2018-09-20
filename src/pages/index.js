import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import styled, {css} from "styled-components"
import { rhythm } from "../utils/typo"
import CancerBG from '../imgs/cancer.jpeg'



const Jumbotron = styled.div`
  width:50%;
  height:100%;
  z-index: -1;
  ${'' /* position: absolute; */}
  color: white;
  display: flex;
  flex-wrap: wrap;
  margin:0 0;
`

const PicJumbo = styled(Jumbotron)`
background:
  linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ),url(${CancerBG});
  background-repeat: no-repeat;
  background-size: cover;
    opacity: 1;
`

const Name = styled.div`
  font-size: ${rhythm(3)};
  margin:auto;
  height:auto;
  ${'' /* text-transform: uppercase; */}
  text-align: center;
`

const Intro = styled.div`
  font-size: ${rhythm(.9)};
  margin: auto 0;
  color:white;
  background: #841C7C;
  width:100%;
  padding: 100px 150px;

`

const MainContainer = styled.div`
  width:100%;
  height:100vh;
  display: flex;
`


export default ({data}) => {
  console.log(data.allFile.edges[0].node.childMarkdownRemark.html)
  return (
    <Layout frontpage>
    <MainContainer>
      {/* <img src={CancerBG}/> */}
      <PicJumbo>
        {/* {data.site.siteMetadata.title.split(" ").map(d=>(<Name>{d}</Name>))} */}
        <Name>{data.site.siteMetadata.title}</Name>
      </PicJumbo>
      <Jumbotron style={{background:"#841C7C"}}>

        <Intro dangerouslySetInnerHTML={{__html:data.allFile.edges[0].node.childMarkdownRemark.html}}/>
      </Jumbotron>

    </MainContainer>
  </Layout>
  )
}




export const query = graphql`
  query{
  site{
    siteMetadata{
      title
      structure
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
