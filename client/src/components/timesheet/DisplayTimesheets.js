import React, { Component } from 'react'
import {Form, FormGroup, FormLabel, FormControl, Row, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getTimeSheets } from '../../actions/timesheetActions';
import TimeSheetTable from './TimesheetTable';
import NavBar from '../Nav_Bar';

class DisplayTimesheets extends Component {

    constructor() {
        super();

        this.state = {
            fromDate: '',
            toDate: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.getTimeSheets(this.state.fromDate, this.state.toDate);
    }

    handleInputChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // Function here to render the TimeSheetTable 

  render() {
    return (
        <div>
            <NavBar/>
            <div className="container-fluid" style={{ marginTop: '4%' }}>
                <div className='jumbotron'>
                    <h1 className='display-4'>Time Sheets</h1>
                </div>
                <h4 className="mb-4">Select the dates below: </h4>
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <FormGroup className="col-md-3">
                            <FormLabel>From</FormLabel>
                            <FormControl name="fromDate" type="date" value={this.state.fromDate} onChange={this.handleInputChange} required />
                        </FormGroup>
                        <FormGroup className="col-md-3">
                            <FormLabel>To</FormLabel>
                            <FormControl name="toDate" type="date" value={this.state.toDate} onChange={this.handleInputChange} required />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button variant="success" style={{ marginRight: '1%' }} type="submit">Submit</Button>
                    </Row>
                </Form>
                <TimeSheetTable />
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    timesheets: state.timesheets,
    errors: state.errors
});

export default connect(mapStateToProps, { getTimeSheets })(DisplayTimesheets);
