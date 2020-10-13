import React, { Component } from "react";

import products from "../api/products";

import Rating from "../components/Rating";

import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
} from "react-bootstrap";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: +props.match.params.id,
      product: null,
      loading: true,
    };
  }

  componentDidMount() {
    const product = products.find(
      (p) => p.id === this.state.id
    );

    this.setState({
      product,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Container>Loading...</Container>;
    }
    return (
      <Container>
        <Row>
          <Col lg="6" className="text-right">
            <Image
              className="img-fluid"
              src={this.state.product.img}
              rounded
            />
          </Col>
          <Col>
            <h2>{this.state.product.title}</h2>
            <hr />
            <h4 className="mb-3">
              ${this.state.product.price}
            </h4>
            <p className="font-weight-bold mb-0">
              Description
            </p>
            <p className="">
              {this.state.product.description}
            </p>
            <p className="font-weight-bold mb-0">
              Rating
            </p>
            <Rating
              rating={this.state.product.rating}
            />
            <hr />
            <Button variant="success ">
              Add to cart
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
