import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoggedIn: false
    }
    this.renderAuthButtons = this.renderAuthButtons.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: (localStorage.getItem('auth') == 'true')
    })
  }
 
  handleLogout = () => {
    fetch("/api/auth/logout")
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("auth", res.auth);
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", null);
        window.location.reload();
      });
  };

  renderAuthButtons() {
    if (this.state.isLoggedIn) {
      return (
        <Button variant="outline-light" onClick={this.handleLogout}>Logout</Button>
      )
    } else {
      return (
        <div>
          <Button variant="outline-light" href="/register" className="mr-sm-2">Sign Up</Button>
          <Button variant="outline-light" href="/login">Login</Button>
        </div>
      )
    }
  }

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
              <NavDropdown.Item href="/display-timesheet">View all timesheets</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {this.renderAuthButtons()}
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
