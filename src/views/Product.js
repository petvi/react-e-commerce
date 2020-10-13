import React, { Component } from "react";

import { Container } from "react-bootstrap";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      product: null,
    };
  }

  componentDidMount() {
    //   Get product
  }

  render() {
    return (
      <Container>
        <h2>Product {this.state.id}</h2>
      </Container>
    );
  }
}
