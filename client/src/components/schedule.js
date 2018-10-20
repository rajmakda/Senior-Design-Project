import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Dropdown from 'react-bootstrap/lib/Dropdown';

class Schedule extends Component {
    constructor(props) {
        super(props);

        this.handleSelect = (eventKey, event) => {
            console.log(event)
        }
    }   

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="container">
                <div className='jumbotron'>
                    <h1 className='display-4'>Pick a schedule for GIAs</h1>
                </div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>Times</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10-12pm</td>
                            <td>
                                <Dropdown onSelect={this.handleSelect}>
                                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                        Select GIA
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey={1}>Action</Dropdown.Item>
                                        <Dropdown.Item eventKey={2}>Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey={3}>Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>12-2pm</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>2-4pm</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>4-6pm</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>6-11pm</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Schedule;