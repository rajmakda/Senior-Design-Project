import React, { Component } from "react";
import NavBar from "./Nav_Bar.js";

import Carousel from "react-bootstrap/lib/Carousel";

class Home extends Component {
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
        <div style={{ backgroundColor: "black" }}>
          <Carousel interval={6000} style={{ width: "900px", margin: "auto" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/image1.jpg")}
                alt="First slide"
                style={{
                  objectFit: "contain"
                }}
              />
              <Carousel.Caption
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/image2.jpg")}
                alt="Second slide"
                style={{
                  objectFit: "contain"
                }}
              />

              <Carousel.Caption
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../images/image3.jpg")}
                alt="Third slide"
                style={{
                  objectFit: "contain"
                }}
              />

              <Carousel.Caption
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;
