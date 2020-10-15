import React from "react";

import { ListGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTags } from "@fortawesome/free-solid-svg-icons";

export default function Menu(props) {
  return (
    <div>
      <ListGroup className="menu">
        {props.categories.map(
          (category, index) => (
            <ListGroup.Item key={index}>
              <FontAwesomeIcon icon={faTags} />{" "}
              {category.name} ({category.quantity}
              )
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </div>
  );
}
