import React from "react"
import styled from "styled-components"




export const FlexConstainer = styled.div`
width:100%;
height:${({height})=>height?height:"60vh"};
display: flex;
flex-wrap:wrap;
justify-content: space-between;
`

export const Card = styled.div`
  width:290px;
  height:400px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin:auto;
`
