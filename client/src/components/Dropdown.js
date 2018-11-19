import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/lib/Dropdown';

class DropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Select GIA"
        }
        this.getEmployees = (employees) => {
            return employees.map(function (employee) {
                return <Dropdown.Item value={JSON.stringify(employee)} as="div" eventKey={employee._id}>{employee.name}</Dropdown.Item>
            })
        }

        this.handleSelect = (eventKey, event) => {
            let employee = JSON.parse(event.target.getAttribute("value"));
            this.props.onSelect(employee, this.props.meta);
            this.setState({title: employee.name});
        }
    }

    render() {
        return (
            <Dropdown onSelect={(eventKey, event) => this.handleSelect(eventKey, event)} drop={this.props.direction}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                    {this.state.title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {this.getEmployees(this.props.employees)}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropDown;