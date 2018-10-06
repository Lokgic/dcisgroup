import React from "react"
import Layout from "../components/layout"
import {  graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typo"
import BG from '../imgs/bg.png'
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
background: #040404;
min-width: 500px;
min-height: 500px;
  ${'' /* linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ),url(${CancerBG});
  background-repeat: no-repeat;
  background-size: cover;
    opacity: 1; */}
`

const IntroJumbo = styled(Jumbotron)`
${'' /* background: #040404; */}
min-width: 500px;
min-height: 500px;
@media (max-width: ${breakpoint[1].x}) {
  background: #841C7C;
}
`

const Name = styled.p`
  font-size: ${rhythm(2.8)};
  margin:auto;
  ${'' /* height:auto; */}
  line-height: 100px;
  ${'' /* text-transform: uppercase; */}
  text-align: center;
  @media (max-width: ${breakpoint[0].x}) {
    font-size: ${rhythm(2)};
  }
`


const Slogan = styled.p`
  font-size: ${rhythm(.8)};
  margin:auto;
  height:auto;
  padding-top: 45px;
  line-height: ${rhythm(.9)};
  color:#ddd;

  text-align: center;
  @media (max-width: ${breakpoint[0].x}) {
    font-size: ${rhythm(.6)};
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


const TitleContainer = styled.div`
  margin:auto;
  display:flex;
  background:linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6)
  ),url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
    opacity: 1;
    height:40vw;
    width:40vw;
    border-radius: 50% 50%;
    @media (max-width: ${breakpoint[1].x}) {
      height:500px;
      width:500px;
      border-radius: 250px 250px;
    }
`

export default ({data}) => {
  console.log(data.allFile.edges[0].node.childMarkdownRemark.html)
  return (
    <Layout frontpage>
    <MainContainer>
      {/* <img src={CancerBG}/> */}
      <PicJumbo>
        {/* {data.site.siteMetadata.title.split(" ").map(d=>(<Name>{d}</Name>))} */}
        <TitleContainer>
          <div style={{margin:"auto"}}>
          <Name>the m<sup>4</sup> laboratory</Name>
        <Slogan>Bringing Mathematical Multi-Scale Modeling to Medicine</Slogan></div>

      </TitleContainer>

      </PicJumbo>
      <IntroJumbo >

        <Intro dangerouslySetInnerHTML={{__html:data.allFile.edges[0].node.childMarkdownRemark.html}}/>
      </IntroJumbo>

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
