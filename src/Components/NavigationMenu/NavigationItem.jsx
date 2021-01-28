import React from "react";
import "../NavigationMenu/NavigationItems.css";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

export const NavigationItem = () => {
  return (
    <div>
      <h1>hiiii</h1>
      <Navbar className="color-nav" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="m-3" href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              className="m-3"
              title="Acadamics"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Courses Offered</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="m-3" title="SignIn" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Student Login</NavDropdown.Item>
              <NavDropdown.Item href="#">Parent Login</NavDropdown.Item>
              <NavDropdown.Item href="#">Guest Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="m-3" href="#home">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
