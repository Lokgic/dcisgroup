import React from "react"
import Layout from "../components/layout"
import {FlexConstainer, Card,CardImg,CardContent,CardName,CardJobTitle,CardBlurb} from '../components/StyComp'
import styled from "styled-components"
import data from '../data/people.json'
import MarcPic from '../imgs/people/marc.jpg'
import IlonaPic from '../imgs/people/ilona.png'
import LokPic from '../imgs/people/lok.png'

const pics = {
  "marc":MarcPic,
  "ilona":IlonaPic,
  "lok":LokPic,
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

          </Card>
        ))}
      </PeopleCont>
    </Layout>

  )
}
