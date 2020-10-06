import React from "react";
import "./App.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto">
              <Form inline>
                <FormControl
                  size="sm"
                  type="text"
                  placeholder="Search products..."
                  className="mr-sm-2"
                />
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
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                My Cart
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
              >
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
