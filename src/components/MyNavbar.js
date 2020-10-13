import React from "react";

import { LinkContainer } from "react-router-bootstrap";

import Search from "./Search";

import logo from "../logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      style={{ marginBottom: "1rem" }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Store
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto">
            <Search />
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <span
                className="nav-link"
                role="button"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faShoppingCart}
                />{" "}
                Cart (0)
              </span>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
