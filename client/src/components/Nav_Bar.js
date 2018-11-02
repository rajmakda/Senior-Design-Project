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
    this.state = {};

    const isLoggedIn = (
      <Button variant="outline-success" onClick={this.handleLogout}>
        Logout
      </Button>
    );
    const isLoggedOut = (
      <Button variant="outline-success" href="/login">
        Login
      </Button>
    );

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
              <NavDropdown.Item href="/display-timesheet">
                View all timesheets
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success" href="/register">
              Sign Up
            </Button>
            {/*logged in or logged out*/}
            {this.state.isLoggedIn ? isLoggedIn : isLoggedOut}
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
