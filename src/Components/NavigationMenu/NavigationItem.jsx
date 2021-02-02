import React from "react";
import "../NavigationMenu/NavigationItems.css";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import { Demo } from "../Demo/Demo";

export const NavigationItem = () => {
  return (
    <div>
      <Navbar className="color-nav" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand className="m-3" href="#home">
              Home
            </Navbar.Brand>
            <NavDropdown
              className="m-3"
              title="Acadamics"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="">Courses Offered</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="m-3 "
              title="SignIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="./">Student Login</NavDropdown.Item>
              <NavDropdown.Item href="">Parent Login</NavDropdown.Item>
              <NavDropdown.Item href="">Guest Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="m-3" href="">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Demo />
    </div>
  );
};
