import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typo"
import Layout from "../components/layout"
import styled,{css} from "styled-components"
import {FlexConstainer} from '../components/StyComp'



const NewsContainer = styled.div`
  width: 80%;
  height:200px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin:auto;
`

const NewsHeading = styled.div`
  width:100%;
  height:30%;
  padding:5px 5px;
  display:flex;
`

const NewsContent = styled.div`
  width:100%;
  height:70%;
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
            <h3 style={{margin:"auto"}}>{d.node.childMarkdownRemark.frontmatter.title}</h3>
            <span style={{float:"right",color:"#bbb",margin:"auto"}}>{d.node.childMarkdownRemark.frontmatter.date}</span>
          </NewsHeading>
          <NewsContent>
            <p>{d.node.childMarkdownRemark.excerpt}</p>
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
