import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typo"

export const breakpoint = [
  {
    x:"1500px"
  },
  {
    x:"1000px"
  },
  {
    x:"650px"
  }
]

export const FlexConstainer = styled.div`
width:100%;
height:${({height})=>height?height:"60vh"};
display: flex;
flex-wrap:wrap;
max-width:1024px;
margin:auto;

`

export const Card = styled.div`
  width:600px;
  height:350px;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  margin: 50px auto;
  overflow: hidden;
  display: flex;
  @media (max-width:${breakpoint[2].x}){
    width:100%;
    height:auto;
    flex-direction: column;
    margin:30px 0;
    box-shadow: none;

  }
`

export const CardImg = styled.img`
  width: 200px;
  height: auto;
  display: block;
  border-radius: 100%;
  margin: auto 10px auto 30px;
  @media (max-width:${breakpoint[2].x}){
    margin:auto;
  }
`

export const CardContent = styled.div`
  margin: auto;
  height: 100%;
  width: 300px;
  padding: 50px 0px 25px 0px;
  @media (max-width:${breakpoint[2].x}){
    width:100%;
    padding:40px 30px;
  }
`

export const CardName = styled.h2`
  font-weight:400;
  margin: 0 0 10px 0;
  width: 100%;

`

export const CardJobTitle = styled.h3`
  font-weight:600;
  font-size: ${rhythm(.6)};
  margin: 0 0 10px 0;
  width: 100%;
  color:#5C7C94;


`

export const CardBlurb = styled.p`
  margin: 0 0 10px 0;
  width: 100%;
  font-size: ${rhythm(.5)};
  font-family: serif;
  text-align: justify;
  @media (max-width:${breakpoint[2].x}){
  font-size: ${rhythm(.6)};
  }

`


export const CardPanel = styled.div`
  display: flex;
  background: #f1f4f7;
  flex-wrap: wrap;
  flex-direction: column;
  align-content:space-evenly;
  @media (max-width:${breakpoint[2].x}){
    flex-direction: row;
    height:${rhythm(3)};
  }
`

export const CardPanelElement = styled.div`
  margin:auto 5px auto 5px;
  font-size: ${rhythm(0.5)};
  @media (max-width:${breakpoint[2].x}){
    margin:auto;
  }

`
