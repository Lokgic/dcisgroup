import React from "react"
import Layout from "../components/layout"
import {
  FlexConstainer,
  Card,
  CardImg,
  CardContent,
  CardName,
  CardJobTitle,
  CardBlurb,
  CardPanel,
  CardPanelElement
} from '../components/StyComp'
import styled from "styled-components"
import data from '../data/people.json'
import MarcPic from '../imgs/people/marc.jpg'
import IlonaPic from '../imgs/people/ilona.png'
import LokPic from '../imgs/people/lok.png'
import MarcCV from '../data/cv_ryser.pdf'


const pics = {
  "marc":MarcPic,
  "ilona":IlonaPic,
  "lok":LokPic,
}

const cv = {
  "marc":MarcCV,
  "ilona":null,
  "lok":null
}

const PeopleCont = styled(FlexConstainer)`
  justify-content: center;
`

export default props=>{
  // console.log(data)
  return (
    <Layout>
      <PeopleCont>
        {Object.keys(data).map(d=>(
          <Card>
            <CardImg src={pics[d]}/>
            <CardContent>
              <CardName>{data[d].name}</CardName>
              <CardJobTitle>{data[d].title}</CardJobTitle>
              <CardBlurb>{data[d].blurb}</CardBlurb>

            </CardContent>
            <CardPanel>
              <CardPanelElement>
                <a style={{color:"#778a99"}} href={`mailto:${data[d].email}`}>
                  @
                </a>
              </CardPanelElement>
              {cv[d]?
                <CardPanelElement>
                  <a target="_blank" style={{color:"#778a99"}} href={cv[d]}>
                    cv
                  </a>
                </CardPanelElement>:null}
            </CardPanel>
          </Card>
        ))}
      </PeopleCont>
    </Layout>

  )
}
