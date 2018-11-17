import React, { Component } from "react";
import NavBar from "./Nav_Bar.js";
import CardColumns from 'react-bootstrap/lib/CardColumns';
import EventCard from './Event';
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Container from 'react-bootstrap/lib/Container'


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isLoading: true
    }
    this.renderEventCards = this.renderEventCards.bind(this);
  }

  componentDidMount() {
    fetch("/api/event")
    .then(res => {
      return res.text()
    }).then(res => {
      var array = JSON.parse(res);
      this.setState({events: array, isLoading: false})
    })
  }

  renderEventCards() {
    let events = this.state.events
    return events.map(function (event) {
      return <EventCard event={event} key={event._id}/>
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <NavBar />
          <img src={require('../images/loading.jpg')} style={{
            position: "absolute",
            top: "10", left: "0", right: "0", bottom: "0",
            margin: "auto"
          }} />
        </div>
      )
    } else {
    return (
      <div>
        <NavBar />
        <div className="container-fluid" style={{marginTop: '2%'}}>
          {
            this.state.events.length > 0 ?
              <CardColumns>
                {this.renderEventCards()}
              </CardColumns>
            :
              <Jumbotron>
                    <h1>No events to display</h1>
              </Jumbotron>
              }
        </div>
      </div>
    );
            }
  }
}

export default Home;
