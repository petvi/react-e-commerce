import React from "react";

import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function HomeProduct(props) {
  return (
    <Card className="product">
      <Link to={`/product/${props.id}`}>
        <Card.Img
          variant="top"
          className="product-img"
          src={props.img}
        />
      </Link>
      <Card.Body>
        <h4>{props.title}</h4>
        <h5>${props.price}</h5>
        <p className="product-description">
          {props.description}
        </p>
      </Card.Body>
      <Card.Footer className="text-warning">
        {[...Array(props.rating)].map(
          (rating, index) => (
            <span key={index}>★</span>
          )
        )}
        {[...Array(5 - props.rating)].map(
          (rating, index) => (
            <span key={index}>☆</span>
          )
        )}
      </Card.Footer>
    </Card>
  );
}
