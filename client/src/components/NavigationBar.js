import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 className="fs-2">UuShoppingList</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button variant="outline-success" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="#">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
