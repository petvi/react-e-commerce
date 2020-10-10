import React from "react";

import "./App.css";

import {
  Row,
  Col,
  Container,
} from "react-bootstrap";

import MyNavbar from "./components/MyNavbar";
import HomeProduct from "./components/HomeProduct";
import Menu from "./components/Menu";

import products from "./api/products";

let categories = [];

for (let i = 0; i < products.length; i++) {
  const dupIndex = categories.findIndex(
    (cat) => cat.name === products[i].category
  );

  if (dupIndex !== -1) {
    categories[dupIndex].quantity++;
  } else {
    categories.push({
      quantity: 1,
      name: products[i].category,
    });
  }
}

categories.sort(function (a, b) {
  return b.quantity - a.quantity;
});

function App() {
  return (
    <div>
      <MyNavbar />
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col>
            <Menu categories={categories} />
          </Col>
          <Col lg={9}>
            <Row>
              {products.map((product) => (
                <Col md="4" key={product.id}>
                  <HomeProduct
                    title={product.title}
                    description={
                      product.description
                    }
                    rating={product.rating}
                    img={product.img}
                    price={product.price}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
