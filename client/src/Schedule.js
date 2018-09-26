import React, { Component } from "react";
import "./Schedule.css";

import { Link } from "react-router-dom";

class Schedule extends Component {
  render() {
    return (
      <div className="Schedule">
        <div class="container-fluid">
          <header>
            <h1 className="Schedule-title">GIA Schedule</h1>
          </header>
        </div>
        <Link to="/">Home Page</Link>
        <p className="Schedule-intro">
          This component will allow you to create schedule for the GIA jobs.
        </p>

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            GIA Job
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Evening Receptionist
            </a>
            <a class="dropdown-item" href="#">
              Office Aide
            </a>
          </div>
        </div>

        <div />
        <p>
          <h1 style={{ textAlign: "center" }}>Office Aides</h1>
        </p>
        <div class="container" style={{ width: "75%", float: "left" }}>
          <table className="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Hours/days</th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">10 - 12</th>
                <td id="M10-12">Test</td>
                <td id="T10-12">Test</td>
                <td id="W10-12">Test</td>
                <td id="Th10-12">Test</td>
                <td id="F10-12">Test</td>
              </tr>
              <tr>
                <th scope="row">12 - 2</th>
                <td id="M12-2">Test</td>
                <td id="T12-2">Test</td>
                <td id="W12-2">Test</td>
                <td id="Th12-2">Test</td>
                <td id="F12-2">Test</td>
              </tr>
              <tr>
                <th scope="row">2 - 4</th>
                <td id="M2-4">Test</td>
                <td id="T2-4">Test</td>
                <td id="W2-4">Test</td>
                <td id="Th2-4">Test</td>
                <td id="F2-4">Test</td>
              </tr>
              <tr>
                <th scope="row">4 - 6</th>
                <td id="M4-6">Test</td>
                <td id="T4-6">Test</td>
                <td id="W4-6">Test</td>
                <td id="Th4-6">Test</td>
                <td id="F4-6">Test</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container" style={{ width: "25%", float: "right" }}>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Names</th>
                <th scope="col">Total Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Test</td>
                <td> 0</td>
              </tr>
              <tr>
                <td> Test</td>
                <td> 0</td>
              </tr>
              <tr>
                <td> Test</td>
                <td> 0</td>
              </tr>
              <tr>
                <td> Test</td>
                <td> 0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Schedule;
