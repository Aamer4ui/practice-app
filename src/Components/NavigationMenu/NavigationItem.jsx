import React from "react";
import "../NavigationMenu/NavigationItems.css";
import { NavDropdown, Nav, Navbar } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { StudentLogin } from "../Student/StudentLogin";

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
              title="Academics"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="">Courses Offered</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="m-3 "
              title="SignIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/Student">Student Login</NavDropdown.Item>
              <NavDropdown.Item href="">Parent Login</NavDropdown.Item>
              <NavDropdown.Item href="">Guest Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="m-3" href="">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* --------Routing----------- */}
      {/* <Router>
        <Switch>
          <Route path="/Student">
            <StudentLogin />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
};
