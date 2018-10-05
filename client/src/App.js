import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Nav_Bar.js";

import Carousel from "react-bootstrap/lib/Carousel";

class App extends Component {
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
      <div className="App">
        <NavBar />
        <div style={{ width: "800px", margin: "auto" }}>
          <Carousel interval="6000">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/image1.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/image2.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./images/image3.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <p className="App-intro">
          <a href="/login">Login</a>
          <br />
          <a href="/timesheet">Timesheet</a>
          <br />
          <a href="/register">Register</a>
          <br />
          <button className="btn btn-link" onClick={this.handleLogout}>
            Logout
          </button>
        </p>
      </div>
    );
  }
}

export default App;
