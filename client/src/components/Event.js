import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'


class Event extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            userIsAdmin: false,
            userIsRA: false
        }
    }

    componentDidMount() {
        this.setState({
            userIsAdmin: (localStorage.getItem('auth') == 'true') && JSON.parse(localStorage.getItem("user")).typeofuser == "admin",
            userIsRA: (localStorage.getItem('auth') == 'true') && JSON.parse(localStorage.getItem("user")).typeofuser == "RA"
        })
    }

    handleDelete() {
        let url = "/api/event/"+this.props.event._id;
        fetch(url, {
            method: "DELETE",
            headers: {
                "x-access-token": localStorage.getItem('token')
            }
        }).then(res => {
            if (res.status == '200') return res.text();
            else return res.json();
        }).catch(err => alert(err))
        .then(res => {
            if (res.err) return alert(res.err);
            alert(res);
            window.location.reload();
        }).catch(err => console.log(err));
    }

    render() {
        let event = this.props.event;
        let date = new Date(event.when);
        let dateString = date.toDateString(0);
        let imgPath = "/api/event/image/"+event.imgPath.split("/").pop();
        return (
                <Card>
                    <Card.Img variant="top" src={imgPath} width={350} height={350}/>
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            {event.description}
                            <br/>
                            <br/>
                        When: {dateString}<br/>
                        Where: {event.where}
                        </Card.Text>
                        <footer className="blockquote-footer">
                            Organized by <cite title="Source Title">{event.owner}</cite>
                        </footer>
                    </Card.Body>
                    {
                        (this.state.userIsAdmin || this.state.userIsRA) ?
                        <Card.Footer>

                        <ButtonToolbar>
                            <Button size="sm" style={{ marginRight: '1%' }}>Update</Button>
                            <Button variant="danger" size="sm" onClick={this.handleDelete}>Delete</Button>
                        </ButtonToolbar>
                        </Card.Footer>
                            : null
                    }
                </Card>
        );
    }
}

export default Event;