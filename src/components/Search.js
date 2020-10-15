import React, { Component } from "react";

import { updateFilter } from "../actions";
import store from "../store";

import {
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import products from "../api/products";

export default class Search extends Component {
  constructor(props) {
    super();
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(
      this
    );
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    store.dispatch(
      updateFilter(event.target.value)
    );
  }

  render() {
    return (
      <Form inline>
        <FormControl
          size="sm"
          type="text"
          placeholder="Search products..."
          className="mr-sm-2"
          onChange={this.handleChange}
          value={this.value}
          list="data"
        />
        <datalist id="data">
          {products.map((product) => (
            <option
              key={product.id}
              value={product.title}
            />
          ))}
        </datalist>
        <Button
          variant="info"
          size="sm"
          style={{
            backgroundColor: "#61dafb",
            color: "#1a1a1a",
          }}
        >
          Search
        </Button>
      </Form>
    );
  }
}
