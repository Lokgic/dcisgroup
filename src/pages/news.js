import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typo"
import Layout from "../components/layout"
import styled,{css} from "styled-components"
import {FlexConstainer} from '../components/StyComp'



const NewsContainer = styled.div`
  width: 80%;
  height: auto;
  ${'' /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */}
  margin:auto;
`

const NewsHeading = styled.div`
  width:100%;
  height:30%;
  padding:5px 5px;
  ${'' /* display:flex; */}
`

const NewsContent = styled.div`
  width:100%;
  height:auto;
  padding:5px 5px;
  display:flex;
`
export default ({data})=>{

  const news = data.allFile.edges

  return(
    <Layout>
      <FlexConstainer>
      {news.map(d=>(
        <NewsContainer>
          <NewsHeading>
            <h2 style={{display:"inline"}}>{d.node.childMarkdownRemark.frontmatter.title}</h2>
            <h3 style={{float:"right",color:"#bbb",display:"inline"}}>{d.node.childMarkdownRemark.frontmatter.date}</h3>
          </NewsHeading>
          <NewsContent>
            {/* <div>{d.node.childMarkdownRemark.excerpt}</div> */}
            <div style={{margin:"auto 0 "}} dangerouslySetInnerHTML={{__html:d.node.childMarkdownRemark.html}}/>
          </NewsContent>
        </NewsContainer>
      ))}
      </FlexConstainer>
    </Layout>
  )
}


export const query = graphql`
query {
  allFile(
    filter:{relativeDirectory:{regex:"/(newsMD)/"}}
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
