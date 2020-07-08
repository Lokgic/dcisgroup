import React from "react";
import Layout from "../components/layout";
import { FlexConstainer, breakpoint } from "../components/StyComp";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <FlexConstainer>
        <div style={{ padding: "50px" }}>
          <h1>Contact</h1>
          <h2>Marc D. Ryser, PhD</h2>
          <p>
            Department of Population Health Sciences
            <br />
            Department of Mathematics
            <br />
            Duke Cancer Institute
            <br />
            Duke University
          </p>
          <h2>Mail:</h2>
          <p>
            215 Morris St
            <br />
            Durham, NC 27701, USA
          </p>
          <h2>Phone:</h2>
          <p>919-684-8294</p>
          <h2>Email:</h2>
          <a href="mailto:marc.ryser@duke.edu">marc.ryser@duke.edu</a>
        </div>
      </FlexConstainer>
    </Layout>
  );
};
