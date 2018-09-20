import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typo"



export const FlexConstainer = styled.div`
width:100%;
height:${({height})=>height?height:"60vh"};
display: flex;
flex-wrap:wrap;
justify-content:center;
`

export const Card = styled.div`
  width:600px;
  height:350px;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  margin:auto;
  overflow: hidden;
  display: flex;
`

export const CardImg = styled.img`
  width: 200px;
  height: auto;
  display: block;
  border-radius: 100%;
  margin: auto 10px auto 30px;
  align-self: flex-start;
`

export const CardContent = styled.div`
  margin: auto;
  height: 100%;
  width: 300px;
  padding: 50px 0px;
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

`
