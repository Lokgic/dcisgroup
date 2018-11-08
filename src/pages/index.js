import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import {FlexConstainer, breakpoint} from '../components/StyComp'
import Banner from '../imgs/logo.png'
import styled from "styled-components"
import { rhythm } from "../utils/typo"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ResearchCard = styled.div`
  width:100%;
  height:auto;
  max-width:1000px;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  margin: auto;
  text-align:center;
 
  @media (max-width:${breakpoint[1].x}){
    width:100%;
    height:auto;
    margin: 0px 0;
    box-shadow: none;

  }
`

const ContentCard = styled.div`

  margin: 10px 20px;
  padding: 0 30px;
  p {
    text-align: justify;
    font-size:${rhythm(.9)};
    @media (max-width:${breakpoint[1].x}){
        font-size:${rhythm(.8)}

    }
    @media (max-width:${breakpoint[2].x}){
        font-size:${rhythm(.7)}

    }
  }


`

const BannerContainer = styled.img`

  width:100%;
  height:auto;
  

`





export default class ResearchPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {showing:0}

  }
  
  render(){
      const {data} = this.props
    return (
      <Layout>
        <FlexConstainer>
          <ResearchCard>
            <BannerContainer src={Banner}/>
            <h1>Welcome to the Ryser Laboratory!</h1>
            <ContentCard style={{margin:"auto"}} dangerouslySetInnerHTML={{__html:data.allFile.edges[0].node.childMarkdownRemark.html}}/>
            <a style={{color:"#778a99"}} href={`mailto:marc.ryser@duke.edu`}>
                  <FontAwesomeIcon icon = {faEnvelope}/>
                </a>
          </ResearchCard>
  
        </FlexConstainer>
      </Layout>
  
    )
  }

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
