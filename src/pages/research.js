import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import {FlexConstainer, breakpoint} from '../components/StyComp'
import Banner from '../imgs/research1banner.png'
import R1Pic from '../imgs/researchPic1.png'
import styled from "styled-components"




const ResearchCard = styled.div`
  width:1024px;
  height:auto;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  margin: auto;
  text-align:center;
  &:hover {
    box-shadow: 0px 20px 30px rgba(0,0,0,0.7);
  }
  @media (max-width:${breakpoint[2].x}){
    width:100%;
    height:auto;
    margin:30px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      background: #FAFAFA;
  }
  }
`

const ContentCard = styled.div`
  display: ${props=>props.show? "block": "none"};
  margin: 10px 20px;
  p {
    text-align:left;
  }

  img{
    width:30%;
    height:auto;
    float:left;
    margin-right:20px;
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
    this.displayLogic = this.displayLogic.bind(this)
  }
  displayLogic(k){
    const showing = this.state.showing === k? 0 :k;
    this.setState({showing});
  }
  render(){
    return (
      <Layout>
        <FlexConstainer>
          <ResearchCard onClick={()=>this.displayLogic(1)}>
            <BannerContainer src={Banner}/>
            <h1>To Treat or not to Treat</h1>
            <p>Decision support for low-risk DCIS patients </p>
            <ContentCard show={this.state.showing===1?true:false}>
            <img src={R1Pic}/>
            <p>Women diagnosed with ductal carcinoma in situ (DCIS) face complex decisions. In addition to guideline-concordant care options (surgery and/or radiation), ongoing trials are investigating the viability of active surveillance as an alternative management strategy.</p>
            <p>
            
                  We are developing an interactive web-based decision support tool that helps newly diagnosed DCIS patients navigate the multi-faceted trade-offs between different management options.

            </p>
            </ContentCard>

          </ResearchCard>
  
        </FlexConstainer>
      </Layout>
  
    )
  }

}

