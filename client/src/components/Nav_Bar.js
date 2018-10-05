import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Nav_Bar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">I-House</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="GIA" id="nav-dropdown">
              <NavDropdown.Item href="/timesheet">Timesheet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success" href="/login">
              Login
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Nav_Bar;
