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
  position: absolute;
  color: white;
  display: flex;
`
const Name = styled.p`
  font-size: ${rhythm(3)};
  margin:auto;
`


export default ({data}) => {
  return (
    <Layout>
      {/* <img src={CancerBG}/> */}
      <Jumbotron><Name>{data.site.siteMetadata.title}</Name></Jumbotron>

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
  }
`
