import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";
import { rhythm } from "../utils/typo";
import { breakpoint } from "../components/StyComp";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBarContainer = styled.div`
  margin: 0 0 20px 0;
  width: 100%;
  display: flex;
  background: #344955;

  position: ${props => (props.frontpage ? "static" : "static")};
  @media (max-width: ${breakpoint[1].x}) {
    position: static;
    margin: 0;
    height: 50px;
  }
  @media (max-width: ${breakpoint[2].x}) {
    /* background:#fefefe; */
  }
`;

const Logo = styled(Link)`
  float: left;
  margin: auto 5px;
  font-size: ${rhythm(0.8)};
  color: white;
  text-shadow: none;
  background-image: none;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: ${breakpoint[1].x}) {
    font-size: 1em;
  }
  @media (max-width: ${breakpoint[2].x}) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  margin: auto;
  color: #fefefe;
  font-size: ${rhythm(0.8)};
  text-shadow: none;
  text-align: none;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: ${breakpoint[1].x}) {
    font-size: 1em;
  }
  @media (max-width: ${breakpoint[2].x}) {
    display: none;
  }
`;

const MainComp = styled.div`
  width: 100%;
  height: 100vh;
`;

// export const TopBar = (props)=>{
//   const {structure} = props
//   return (
//     <TopBarContainer frontpage={props.frontpage}>
//       <Logo to="/"><div>ryser</div><div>laboratory</div> </Logo>
//       {structure.map(d=>(
//         <StyledLink to={`/${d}/`}key={`link_${d}`}>{d}</StyledLink>
//       ))}
//     </TopBarContainer>
//   )
// }

const MenuButton = styled.button`
  background: #344955;
  color: white;
  display: none;
  border: none;
  font-size: 2.5em;
  @media (max-width: ${breakpoint[2].x}) {
    display: inline;
  }
`;

const Menu = styled.div`
  position: absolute;
  x: 0;
  y: 0;
  margin: 0;
  height: 100vh;
  transition: width 0.8s;
  width: ${props => (props.open ? "100vw" : 0)};
  background: #232f34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const ExitButton = styled.button`
  position: absolute;
  right: 50px;
  top: 20px;
  background: #f9aa33;
  border: none;
  border-radius: 50% 50%;
  font-size: 1em;
`;

const MenuLink = styled(Link)`
  margin: auto;
  font-size: ${rhythm(1)};
  color: white;
  text-shadow: none;
  background-image: none;
  &:hover {
    text-decoration: none;
  }
`;

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.setButtonState = this.setButtonState.bind(this);
  }
  setButtonState(input) {
    this.setState({ open: input });
  }

  render() {
    const { structure } = this.props;
    return (
      <TopBarContainer frontpage={this.props.frontpage}>
        <Logo to="/">
          <div>ryser</div>
          <div>laboratory</div>{" "}
        </Logo>
        {structure.map(d => (
          <StyledLink to={`/${d}/`} key={`link_${d}`}>
            {d}
          </StyledLink>
        ))}
        <MenuButton onClick={() => this.setButtonState(true)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
        <Menu open={this.state.open}>
          <ExitButton onClick={() => this.setButtonState(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </ExitButton>
          <MenuLink onClick={() => this.setButtonState(false)} to="/">
            <div>ryser</div>
            <div>laboratory</div>{" "}
          </MenuLink>
          {structure.map(d => (
            <MenuLink
              onClick={() => this.setButtonState(false)}
              to={`/${d}/`}
              key={`link_${d}`}
            >
              {d}
            </MenuLink>
          ))}
        </Menu>
      </TopBarContainer>
    );
  }
}

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              structure
            }
          }
        }
      `}
      render={data => (
        <MainComp>
          <TopBar
            frontpage={props.frontpage}
            structure={data.site.siteMetadata.structure}
          />

          {props.children}
        </MainComp>
      )}
    />
  );
};
