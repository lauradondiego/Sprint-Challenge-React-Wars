import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import cardImage from "../Img/cardImage.jpg";

const src = "../Img/cardImg.jpg";

export const CardExampleCard = ({ char }) => (
  <Card>
    <Image src={cardImage} style={{ width: "100px" }} />{" "}
    <Card.Content>
      <Card.Header>{char.name}</Card.Header>
      <Card.Meta>
        <p>{char.weight}</p>
      </Card.Meta>
      <Card.Description>
        <p>{char.eye_color}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>{char.mass}</p>
    </Card.Content>
  </Card>
);
