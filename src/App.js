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

function App() {
  return (
    <div>
      <MyNavbar />
      <Container style={{ marginTop: "1rem" }}>
        <Row>
          <Col className="">
            <Menu />
          </Col>
          <Col className="" lg={9}>
            <Row>
              {products.map((product) => (
                <Col md="4" key={product.id}>
                  <HomeProduct
                    title={product.title}
                    description={
                      product.description
                    }
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
