import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
        </p>
      </div>
    );
  }
}

export default App;
