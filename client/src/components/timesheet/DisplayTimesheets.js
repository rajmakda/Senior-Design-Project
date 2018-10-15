import React, { Component } from 'react'
import {Form, FormGroup, FormLabel, FormControl, Row, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getTimeSheets } from '../../actions/timesheetActions';
import TimeSheetTable from './TimesheetTable';

class DisplayTimesheets extends Component {

    constructor(props) {
        super(props);

        this.setState = {
            fromDate: "",
            toDate: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        //this.props.getTimeSheets();
        console.log('Submitted');
        console.log(e.target.name);
    }

    handleInputChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

  render() {
    return (
      <div className="container">
        <div className='jumbotron'>
                <h1 className='display-4'>Time Sheets</h1>
        </div>
        <h4 className="mb-4">Select the dates below: </h4>
        <Form onSubmit={this.onSubmit}>
            <Row>
                <FormGroup className="col-md-3">
                    <FormLabel>From</FormLabel>
                    <FormControl name="from" value={this.state.fromDate} type="date" onChange={this.handleInputChange} required/>
                </FormGroup>
                <FormGroup className="col-md-3">
                    <FormLabel>To</FormLabel>
                    <FormControl name="to" value={this.state.toDate} type="date" onChange={this.handleInputChange} required/>
                </FormGroup>
            </Row>
            <Row>
                <Button variant="success" type="submit">Submit</Button>
            </Row>
        </Form>
        <TimeSheetTable />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    timesheets: state.timesheets,
    errors: state.errors
});

export default connect(mapStateToProps, { getTimeSheets })(DisplayTimesheets);
