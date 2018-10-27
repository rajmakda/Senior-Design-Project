import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    fetch("/api/auth/logout")
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("auth", res.auth);
        localStorage.setItem("token", res.token);
        window.location.reload();
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">I-House</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="GIA" id="nav-dropdown">
              <NavDropdown.Item href="/timesheet">Worklog</NavDropdown.Item>
              <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
              <NavDropdown.Item href="/gia">Upload</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success" href="/register">
              Sign Up
            </Button>

            <Button variant="outline-success" href="/login">
              Login
            </Button>

            <Button variant="outline-success" onClick={this.handleLogout}>
              Logout
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
