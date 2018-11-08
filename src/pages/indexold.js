import React from "react"
import Layout from "../components/layout"
import {  graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typo"
import Logo from '../imgs/logo.png'
import {breakpoint} from '../components/StyComp'



const Jumbotron = styled.div`
  width:100%;
  height:auto;
  z-index: -1;
  ${'' /* position: absolute; */}
  color: white;
  display: flex;
  margin:0 0;
  @media(max-width:${breakpoint[1].x}){
 
  }
`

const PicJumbo = styled(Jumbotron)`
background: #fefefe;
min-width: 350px;

width:100%;
  padding:50px 50px;

  img {
    max-width:1000px;
    width:100%;
    height:auto;
    margin:auto;
  }
`

const IntroJumbo = styled(Jumbotron)`
${'' /* background: #040404; */}
min-width: 350;
min-height: 350px;

@media (max-width: ${breakpoint[1].x}) {
  background: #841C7C;
}
`

const Name = styled.p`
  font-size: ${rhythm(3.5)};
  margin:auto;
  ${'' /* height:auto; */}
  line-height: 100px;
  ${'' /* text-transform: uppercase; */}
  text-align: center;
  @media (max-width: ${breakpoint[0].x}) {
    font-size: ${rhythm(3)};
  }
`


const Slogan = styled.p`
  font-size: ${rhythm(1.2)};
  margin:auto;
  height:auto;
  line-height: ${rhythm(.9)};
  color:#fff;
  padding-bottom:70px;
  text-align: center;
  @media (max-width: ${breakpoint[0].x}) {
    font-size: ${rhythm(.9)};
  }
`

const MStyle = styled.span`
font-size: ${props=>props.type==="big"?rhythm(5):rhythm(1.3)};
color:none;
-webkit-text-fill-color: rgba(0, 0, 0, 0); /* Will override color (regardless of order) */
 -webkit-text-stroke-width: ${props=>props.type==="big"?"1px":".4px"};
 -webkit-text-stroke-color: white;
@media (max-width: ${breakpoint[0].x}) {
  font-size: ${props=>props.type==="big"?rhythm(3.5):rhythm(1)};
}
`

const MLogo = ({type})=>(<MStyle type={type}>m</MStyle>)

const Intro = styled.div`
  font-size: ${rhythm(.9)};
  margin: auto 0;
  color:white;
  background: #841C7C;
  width:100%;
  padding: 70px 70px;
  display:flex;
  flex-direction:column;
  @media (max-width: ${breakpoint[0].x}) {
    padding: 50px 50px;
    font-size: ${rhythm(.7)};
  }


`

const MainContainer = styled.div`
  width:100%;
  height:100vh;


`


const TitleContainer = styled.div`
  margin:auto;
  display:flex;

  background-repeat: no-repeat;
  background-size: cover;
    opacity: 1;
    height:100%;
      width:100%;
      border-radius: 0 ;
    @media (max-width: ${breakpoint[1].x}) {
      
    }
`



export default ({data}) => {
  console.log(data.allFile.edges[0].node.childMarkdownRemark.html)
  return (
    <Layout frontpage>
    <MainContainer>
      {/* <img src={CancerBG}/> */}
      <PicJumbo>
        <img src={Logo}/>
        {/* <TitleContainer>
          <div style={{margin:"auto"}}>
          <Name>the <MLogo type="big"/><sup>4</sup> laboratory</Name>
        
        </div>

      </TitleContainer> */}

      </PicJumbo>
      <IntroJumbo >
      
        <Intro >
        {/* <Slogan>bringing <MLogo/>athematical <MLogo/>ulti-scale <MLogo/>odeling to <MLogo/>edicine</Slogan> */}
        <div style={{margin:"auto"}}dangerouslySetInnerHTML={{__html:data.allFile.edges[0].node.childMarkdownRemark.html}}/>
        </Intro>
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
