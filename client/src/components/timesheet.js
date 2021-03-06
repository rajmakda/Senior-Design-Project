import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Row, Button } from 'react-bootstrap';
import NavBar from './Nav_Bar';

class timesheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noOfRows: 1,
            worklog: [],
            sjsuid: JSON.parse(localStorage.getItem("user")).sjsuid,
        }

        if (new Date().getDate() <= 15) {
            var date = new Date();
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            this.state.from = firstDay.toDateInputValue()
        } else {
            var date = new Date();
            var fifteenthDay = new Date(date.getFullYear(), date.getMonth(), 15);
            this.state.from = fifteenthDay.toDateInputValue()
        }

        if (new Date().getDate() <= 15) {
            var date = new Date();
            var from = new Date(date.getFullYear(), date.getMonth(), 15);
            this.state.to = from.toDateInputValue()
        } else {
            var date = new Date();
            var lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0);
            this.state.to = lastDay.toDateInputValue()
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleWorklogDateChange = this.handleWorklogDateChange.bind(this)
        this.handleWorklogJobChange = this.handleWorklogJobChange.bind(this)
        this.handleWorklogTimeChange = this.handleWorklogTimeChange.bind(this)
        this.handleWorklogHoursChange = this.handleWorklogHoursChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = {
            timeperiod: {
                from: this.state.from,
                to: this.state.to
            },
            worklog: this.state.worklog
        }
        fetch(`/api/timesheet/${this.state.sjsuid}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "x-access-token": `${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        }).then(res => {
            return res.json();
        }).catch(err => console.log(err))
            .then(res => {
                if (res.err) return alert(res.err);
                if (res.auth === false) return alert(res.message);
                if (res.ok) { alert("Successfully updated timesheet"); this.props.history.push("/"); }
            }).catch(err => console.log(err))
    }

    handleInputChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleWorklogDateChange(event) {
        console.log(event.target.id)
        let worklog = this.state.worklog;
        worklog[event.target.id] ? worklog[event.target.id].date = event.target.value : worklog[event.target.id] = { date: event.target.value };
        this.setState({ worklog: worklog })
        console.log(this.state.worklog)
    }

    handleWorklogJobChange(event) {
        let worklog = this.state.worklog;
        worklog[event.target.id] ? worklog[event.target.id].job = event.target.value : worklog[event.target.id] = { job: event.target.value };
        this.setState({ worklog: worklog })
        console.log(this.state.worklog)
    }

    handleWorklogTimeChange(event) {
        let worklog = this.state.worklog;
        worklog[event.target.id] ? worklog[event.target.id].time = event.target.value : worklog[event.target.id] = { time: event.target.value };
        this.setState({ worklog: worklog })
        console.log(this.state.worklog)
    }

    handleWorklogHoursChange(event) {
        let worklog = this.state.worklog;
        worklog[event.target.id] ? worklog[event.target.id].hours = event.target.value : worklog[event.target.id] = { hours: event.target.value };
        this.setState({ worklog: worklog })
        console.log(this.state.worklog)
    }

    addRow = () => {
        let noOfRows = this.state.noOfRows + 1;
        this.setState({ noOfRows });
    }

    createRows = () => {
        let rows = []
        let noOfRows = this.state.noOfRows;
        for (var i = 0; i < noOfRows; i++) {
            rows.push(
                <Row key={i}>
                    <FormGroup className="col">
                        <FormControl id={i + ""} type="date" onChange={this.handleWorklogDateChange} />
                    </FormGroup>
                    <FormGroup className="col">
                        <FormControl id={i + ""} onChange={this.handleWorklogJobChange} />
                    </FormGroup>
                    <FormGroup className="col">
                        <FormControl id={i + ""} onChange={this.handleWorklogTimeChange} />
                    </FormGroup>
                    <FormGroup className="col">
                        <FormControl id={i + ""} onChange={this.handleWorklogHoursChange} />
                    </FormGroup>
                </Row>
            )
        }
        return rows;
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className='jumbotron' style={{marginTop: '4%'}}>
                    <h1 className='display-4'>Grant-In-Aid Time-Sheet</h1>
                </div>
                <div className='container-fluid'>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <FormGroup className="col-md-4">
                                <FormLabel>SJSU ID</FormLabel>
                                <FormControl id="sjsuid" onChange={this.handleInputChange} required placeholder="SJSU ID" value={this.state.sjsuid}/>
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <FormLabel>From</FormLabel>
                                <FormControl id="from" onChange={this.handleInputChange} type="date" required value={this.state.from} />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <FormLabel>To</FormLabel>
                                <FormControl id="to" onChange={this.handleInputChange} type="date" required value={this.state.to} />
                            </FormGroup>
                        </Row>
                        <Row>
                            <p className="col">Date</p>
                            <p className="col">Job Done</p>
                            <p className="col">Time In/Out</p>
                            <p className="col">Total Hours</p>
                        </Row>
                        {this.createRows()}
                        <Button variant="outline-success" style={{ marginRight: '1%' }} onClick={this.addRow}>+</Button>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default timesheet;

Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});
