import React from "react";
import Layout from "../components/layout";
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
} from "../components/StyComp";
import styled from "styled-components";
import data from "../data/people.json";
import MarcPic from "../imgs/people/marc.jpg";
import IlonaPic from "../imgs/people/ilona.png";
import LokPic from "../imgs/people/lok.png";
import JenniferPic from "../imgs/people/jennifer.png";
import InmaPic from "../imgs/people/inma.jpg";
import MarcCV from "../data/cv_ryser.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const pics = {
  marc: MarcPic,
  ilona: IlonaPic,
  lok: LokPic,
  jennifer: JenniferPic,
  inma: InmaPic
};

const cv = {
  marc: MarcCV,
  ilona: null,
  lok: null
};

const PeopleCont = styled(FlexConstainer)`
  justify-content: center;
  max-width: 1600px;
  margin: auto;
`;

export default props => {
  // console.log(data)
  return (
    <Layout>
      <PeopleCont>
        {Object.keys(data).map(d => (
          <Card>
            <CardImg src={pics[d]} />
            <CardContent>
              <CardName>{data[d].name}</CardName>
              <CardJobTitle>{data[d].title}</CardJobTitle>
              <CardBlurb>{data[d].blurb}</CardBlurb>
            </CardContent>
            <CardPanel>
              <CardPanelElement>
                <a
                  style={{ color: "#778a99" }}
                  href={`mailto:${data[d].email}`}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </CardPanelElement>
              {cv[d] ? (
                <CardPanelElement>
                  <a target="_blank" style={{ color: "#778a99" }} href={cv[d]}>
                    cv
                  </a>
                </CardPanelElement>
              ) : null}
              {data[d].twitter ? (
                <CardPanelElement>
                  <a
                    target="_blank"
                    style={{ color: "#778a99" }}
                    href={`https://twitter.com/${data[d].twitter}`}
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </CardPanelElement>
              ) : null}
            </CardPanel>
          </Card>
        ))}
      </PeopleCont>
    </Layout>
  );
};
