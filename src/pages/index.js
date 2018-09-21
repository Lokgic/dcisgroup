import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typo"
import CancerBG from '../imgs/cancer.jpeg'
import {breakpoint} from '../components/StyComp'



const Jumbotron = styled.div`
  width:50%;
  height:100%;
  z-index: -1;
  ${'' /* position: absolute; */}
  color: white;
  display: flex;
  flex-wrap: wrap;
  margin:0 0;
  @media(max-width:${breakpoint[1].x}){
    width:100%;
  }
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

const Name = styled.p`
  font-size: ${rhythm(3)};
  margin:auto;
  ${'' /* height:auto; */}
  line-height: 100px;
  ${'' /* text-transform: uppercase; */}
  text-align: center;
  @media (max-width: ${breakpoint[0].x}) {
    font-size: ${rhythm(2)};
  }
`

const Intro = styled.div`
  font-size: ${rhythm(.9)};
  margin: auto 0;
  color:white;
  background: #841C7C;
  width:100%;
  padding: 100px 150px;
  @media (max-width: ${breakpoint[0].x}) {
    padding: 50px 50px;
    font-size: ${rhythm(.7)};
  }


`

const MainContainer = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  @media (max-width: ${breakpoint[1].x}) {
    flex-direction: column;
  }
`

const Slogan = styled.p`
  font-size: ${rhythm(.8)};
  margin:auto;
  height:auto;
  line-height: 20px;
  color:white;

  text-align: center;
  @media (max-width: ${breakpoint[0].x}) {
    font-size: ${rhythm(.5)};
  }
`

const TitleContainer = styled.div`
  margin:auto;
`

export default ({data}) => {
  console.log(data.allFile.edges[0].node.childMarkdownRemark.html)
  return (
    <Layout frontpage>
    <MainContainer>
      {/* <img src={CancerBG}/> */}
      <PicJumbo>
        {/* {data.site.siteMetadata.title.split(" ").map(d=>(<Name>{d}</Name>))} */}
        <TitleContainer><Name>{data.site.siteMetadata.title}</Name>
        <Slogan>Bringing Mathematical Multi-Scale Modeling to Medicine</Slogan></TitleContainer>

      </PicJumbo>
      <Jumbotron >

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
