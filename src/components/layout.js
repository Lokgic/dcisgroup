import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled, {css} from "styled-components"
import { rhythm } from "../utils/typo"

console.log(rhythm(2))

const TopBarContainer = styled.div`
  margin:0 0;
  width:100%;
  display: flex;
`

const Logo = styled(Link)`
  float: left;
  margin: auto 5px;
  font-size: ${rhythm(2)};
  color:black;
`

const StyledLink = styled(Link)`
  margin:auto;
  color:black;
`

const TopBar = (props)=>{
  console.log(props)
  const {structure} = props
  return (
    <TopBarContainer>
      <Logo to="/">MX</Logo>
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
          <div>
            <TopBar structure={data.site.siteMetadata.structure}/>

            {props.children}
          </div>
        )
      }
    />


  )
}
