import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import {FlexConstainer, Card} from '../components/StyComp'



export default props=>{
  return (
    <Layout>
      <FlexConstainer>
        <Card>Coming soon</Card>
        {/* <Card>Project B</Card>
        <Card>Project C</Card> */}
      </FlexConstainer>
    </Layout>

  )
}
