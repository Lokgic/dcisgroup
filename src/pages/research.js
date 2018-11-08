import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import {FlexConstainer, breakpoint} from '../components/StyComp'
import R1Pic from '../imgs/research1banner.png'
import R2Pic from '../imgs/researchPic2.png'
import R3Pic from '../imgs/researchPic3.png'
import styled from "styled-components"




const ResearchCard = styled.div`
  width:1024px;
  height:auto;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  margin: 30px auto;
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
          <ResearchCard>
            <h1>Decision Support for DCIS Patients </h1>
            <BannerContainer src={R1Pic}/>
            <ContentCard show>
            <p><b>Why:</b> Women diagnosed with ductal carcinoma in situ (DCIS) face complex decisions. In addition to guideline-concordant care options, ongoing trials are investigating the viability of active surveillance as an alternative strategy</p>
            <p><b>What:</b> We are developing an interactive web-based decision support tool that helps newly diagnosed DCIS patients navigate the multi-faceted trade-offs between different management options. </p>
            <p><b>How:</b> Risk modeling, knowledge synthesis, uncertainty visualization, patient communication, qualitative research</p>
            </ContentCard>
          </ResearchCard>
          <ResearchCard>
            <h1>Model-Based Risk Predictions </h1>
            <BannerContainer src={R2Pic}/>
            <ContentCard show>
            <p><b>Why:</b> Women diagnosed with ductal carcinoma in situ (DCIS) have several management options. To enable informed decision making, quantitative risk predictions are needed. </p>
            <p><b>What:</b> We use model-based approaches to synthesize evidence from observational studies and randomized trials to predict a range of risks for treatment and active surveillance strategies.  </p>
            <p><b>How:</b> Mathematical and statistical modeling, Bayesian evidence synthesis, decision analysis</p>
            <p><b>Collaborators:</b> <a href="http://research.fhcrc.org/etzioni/en.html" target="_blank">Etzioni lab</a>@ Fred Hutch</p>
            </ContentCard>
          </ResearchCard>
          <ResearchCard>
            <h1>Dynamics of Cancer Initiation </h1>
            <BannerContainer src={R3Pic}/>
            <ContentCard show>
            <p><b>Why:</b> Not all screen-detected cancerous lesions progress to life-threatening disease. To avoid overtreatment, identification of non-progressive lesions is critical.</p>
            <p><b>What:</b> We combine experimental data from human tumors with mathematical modeling to elucidate the evolutionary dynamics of cancer initiation and to identify markers of invasive progression.  </p>
            <p><b>How:</b> Multi-regional sequencing assays (genetic and epigenetic), mechanistic mathematical models</p>
            <p><b>How:</b> Multi-regional sequencing assays (genetic and epigenetic), mechanistic mathematical models</p>
            <p><b>Collaborators:</b> <a href="https://surgery.duke.edu/divisions/advanced-oncologic-and-gastrointestinal-surgery/research/research-laboratories/determinants-progression-early-breast-and-ovarian-cancer/lab-members" target="_blank">Hwang and Marks lab </a>@ Duke,   <a href="https://keck.usc.edu/faculty-search/darryl-shibata/" target="_blank">Shibata lab</a>@ USC</p>
            </ContentCard>
          </ResearchCard>
        </FlexConstainer>
      </Layout>
  
    )
  }

}

