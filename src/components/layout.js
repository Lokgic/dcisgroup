import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
// import { rhythm } from "../utils/typo"
import {breakpoint} from '../components/StyComp'


const TopBarContainer = styled.div`
  margin:0 0 40px 0;
  width:100%;
  display: flex;
  position: ${props=>props.frontpage?"absolute":"static"};
  @media (max-width:${breakpoint[1].x}){
    position:static;
  }
`

const Logo = styled(Link)`
  float: left;
  margin: auto 5px;
  font-size: 15px;
  color:black;
  text-shadow: none;
  background-image: none;
`

const StyledLink = styled(Link)`
  margin:auto;
  color:grey;
  font-size: 15px;
  text-shadow: none;
`

const MainComp = styled.div`
  width:100%;
  height:100vh;
`

export const TopBar = (props)=>{
  const {structure} = props
  return (
    <TopBarContainer frontpage={props.frontpage}>
      <Logo to="/">RRC</Logo>
      {structure.map(d=>(
        <StyledLink to={`/${d}/`}key={`link_${d}`}>{d}</StyledLink>
      ))}
    </TopBarContainer>
  )
}


export default props => {
  console.log(props)
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
