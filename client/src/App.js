import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = () => {
    fetch("/api/auth/logout")
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("auth",res.auth);
        localStorage.setItem("token",res.token);
        window.location.reload();
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the International House at SJSU</h1>
        </header>
        <p className="App-intro">
          <a href="/login">Login</a><br/>
          <a href="/timesheet">Timesheet</a><br />
          <a href="/register">Register</a><br/>
          <a href="/gia">Upload Data</a><br/>
          <a href="/schedule">Set a schedule</a><br/>
          <button className="btn btn-link" onClick={this.handleLogout}>Logout</button>
        </p>
      </div>
    );
  }
}

export default App;
