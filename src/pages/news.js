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
    max-width: 1300px;
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

  const news = data.allMarkdownRemark.edges
  return(
    <Layout>
      <FlexConstainer>
      {news.map(d=>(
        <NewsContainer>
          <NewsHeading>
            <h2 style={{display:"inline"}}>{d.node.frontmatter.title}</h2>
            <h3 style={{float:"right",color:"#bbb",display:"inline"}}>{d.node.frontmatter.date}</h3>
          </NewsHeading>
          <NewsContent>

            <div style={{margin:"auto 0 "}} dangerouslySetInnerHTML={{__html:d.node.html}}/>
          </NewsContent>
        </NewsContainer>
      ))}
      </FlexConstainer>
    </Layout>
  )
}


export const query = graphql`
query
{
   allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {fileAbsolutePath: {regex: "/(newsMD)/"}}
  ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")

          }
        }
      }
    }
}
`
