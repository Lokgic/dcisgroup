import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typo"
import {breakpoint} from '../components/StyComp'


const TopBarContainer = styled.div`
  margin:20px 0;
  width:100%;
  display: flex;
  position: ${props=>props.frontpage?"absolute":"static"};
  @media (max-width:${breakpoint[1].x}){
    position:static;
    margin:20px 0;
  }
`

const Logo = styled(Link)`
  float: left;
  margin: auto 5px;
  font-size: ${rhythm(2)};
  color:black;
  text-shadow: none;
  background-image: none;
  @media (max-width:${breakpoint[1].x}){
    font-size: 1em;
  }
`

const StyledLink = styled(Link)`
  margin:auto;
  color:grey;
  font-size: ${rhythm(.8)};
  text-shadow: none;
  @media (max-width:${breakpoint[1].x}){
    font-size: 1em;
  }
`

const MainComp = styled.div`
  width:100%;
  height:100vh;
`

export const TopBar = (props)=>{
  const {structure} = props
  return (
    <TopBarContainer frontpage={props.frontpage}>
      <Logo to="/">m<sup>4</sup> </Logo>
      {structure.map(d=>(
        <StyledLink to={`/${d}/`}key={`link_${d}`}>{d}</StyledLink>
      ))}
    </TopBarContainer>
  )
}


export default props => {
  return (
    <StaticQuery
      query={
        graphql`
          query{
            site{
              siteMetadata{
                title
                structure
              }
            }
          }
        `}
      render= {
        data=>(
          <MainComp>
            <TopBar frontpage={props.frontpage} structure={data.site.siteMetadata.structure}/>

            {props.children}
          </MainComp>
        )
      }
    />


  )
}
