import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    work: [{date:"", job:"", time:"", hours:""}],

  }

handleChange = (e) => {
    if (["date", "job", "time", "hours"].includes(e.target.className) ) {
      let work = [...this.state.work]
      work[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ work }, () => console.log(this.state.work))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }

addRow = (e) => {
    this.setState((prevState) => ({
      work: [...prevState.work, {date:"", job:"", time:"", hours:""}],
    }));
  }

handleSubmit = (e) => {
    var n = JSON.stringify(this.state.work);
    alert(n);
    e.preventDefault() }

render() {
    let {owner, description, work} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1> Links </h1>
          <Link to="/schedule">Schedule</Link>
        </div>
      </div>
    );
  }
}
export default App
