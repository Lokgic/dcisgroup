import React from "react"
import Layout from "../components/layout"
import {  Link, graphql } from "gatsby"
import {FlexConstainer, Card} from '../components/StyComp'



export default props=>{
  return (
    <Layout>
      <FlexConstainer>
        <Card>People</Card>
      </FlexConstainer>
    </Layout>

  )
}
