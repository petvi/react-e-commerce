import React from "react";

import { Card, Button } from "react-bootstrap";

export default function HomeProduct(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <h4>{props.title}</h4>
          <h5>${props.price}</h5>
          <p>{props.description}</p>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
