import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import AddEvent from './AddEvent';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoggedIn: false,
      userIsAdmin: false,
      userIsRA: false,
    }
    this.renderAuthButtons = this.renderAuthButtons.bind(this);
    this.renderAdminButtons = this.renderAdminButtons.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: (localStorage.getItem('auth') == 'true'),
      userIsAdmin: (localStorage.getItem('auth') == 'true') && JSON.parse(localStorage.getItem("user")).typeofuser == "admin",
      userIsRA: (localStorage.getItem('auth') == 'true') && JSON.parse(localStorage.getItem("user")).typeofuser == "RA"
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

  renderAdminButtons() {
    if (this.state.userIsAdmin) {
      return (
        <span style={{display: "flex"}}>
          <Nav.Link href="/timesheet">Worklog</Nav.Link>
          <Nav.Link href="/schedule">Schedule</Nav.Link>
          <Nav.Link href="/gia">Upload</Nav.Link>
          <Nav.Link href="/display-timesheet">Timesheets</Nav.Link>
        </span>
      )
    } else if (this.state.isLoggedIn) {
        return (
          <Nav.Link href="/timesheet">Worklog</Nav.Link>
        )
    } else {
      return 
    }
  }

  renderRAorAdminButtons() {
    let modalClose = () => this.setState({ modalShow: false });
    if (this.state.userIsAdmin || this.state.userIsRA) {
      return (
        <div>
          <Nav.Link onClick={() => this.setState({ modalShow: true })}>
              Create Event
          </Nav.Link>
        <AddEvent show={this.state.modalShow} onHide={modalClose} title="Create a new event"/>
        </div>
      );
    } else {
      return
    }
  }

  render() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top" >
          <Navbar.Brand href="#home">I-House</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {this.renderAdminButtons()}
            {this.renderRAorAdminButtons()}
          </Nav>
          {this.renderAuthButtons()}
        </Navbar>
    );
  }
}

export default NavBar;
