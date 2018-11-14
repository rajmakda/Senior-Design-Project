import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import Button from 'react-bootstrap/lib/Button';
import NavBar from '../components/Nav_Bar';
import DropDown from './Dropdown';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            m_10_12: [],
            m_12_2: [],
            m_2_4:[],
            m_4_6:[],
            m_6_11:[],
            t_10_12: [],
            t_12_2: [],
            t_2_4:[],
            t_4_6:[],
            t_6_11:[],
            w_10_12: [],
            w_12_2: [],
            w_2_4:[],
            w_4_6:[],
            w_6_11:[],
            th_10_12: [],
            th_12_2: [],
            th_2_4:[],
            th_4_6:[],
            th_6_11:[],
            f_10_12: [],
            f_12_2: [],
            f_2_4:[],
            f_4_6:[],
            f_6_11:[],
            s_10_12: [],
            s_12_2: [],
            s_2_4:[],
            s_4_6:[],
            s_6_11:[],
            su_10_12: [],
            su_12_2: [],
            su_2_4:[],
            su_4_6:[],
            su_6_11:[],
            loading: true,
            schedule: {}
            
        }
        this.handleSelect = (employee, meta) => {
            this.setState(prevState => {
                prevState.schedule[meta] = employee
            })
        }

        this.submitSchedule = () => {
            alert("Schedule saved successfully");
        }
    }   

    componentDidMount() {
        fetch("/api/schedule/availability", {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then(res => {
                return res.json();
            }).catch(err => console.log(err))
            .then(res => {
                if (res.message) alert(res.message)
                if(res.availableUser) {
                    this.setState({giaEmployees: res.availableUser})
                    this.segregateEmployeesByDay(this.state.giaEmployees)
                }
            }).catch(err => alert(err))
            .then(() => {
                this.setState({loading: false});
            })
    }

    segregateEmployeesByDay(giaEmployees) {
        for (let giaEmployee of giaEmployees) {
            for (let time of giaEmployee.availability.mon) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    m_10_12: [...prevState.m_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    m_12_2: [...prevState.m_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    m_2_4: [...prevState.m_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    m_4_6: [...prevState.m_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    m_6_11: [...prevState.m_6_11, giaEmployee]
                }))
            }
            for (let time of giaEmployee.availability.tue) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    t_10_12: [...prevState.t_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    t_12_2: [...prevState.t_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    t_2_4: [...prevState.t_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    t_4_6: [...prevState.t_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    t_6_11: [...prevState.t_6_11, giaEmployee]
                }))
            }
            for (let time of giaEmployee.availability.wed) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    w_10_12: [...prevState.w_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    w_12_2: [...prevState.w_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    w_2_4: [...prevState.w_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    w_4_6: [...prevState.w_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    w_6_11: [...prevState.w_6_11, giaEmployee]
                }))
            }
            for (let time of giaEmployee.availability.thu) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    th_10_12: [...prevState.th_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    th_12_2: [...prevState.th_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    th_2_4: [...prevState.th_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    th_4_6: [...prevState.th_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    th_6_11: [...prevState.th_6_11, giaEmployee]
                }))
            }
            for (let time of giaEmployee.availability.fri) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    f_10_12: [...prevState.f_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    f_12_2: [...prevState.f_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    f_2_4: [...prevState.f_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    f_4_6: [...prevState.f_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    f_6_11: [...prevState.f_6_11, giaEmployee]
                }))
            }
            for (let time of giaEmployee.availability.sat) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    s_10_12: [...prevState.s_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    s_12_2: [...prevState.s_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    s_2_4: [...prevState.s_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    s_4_6: [...prevState.s_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    s_6_11: [...prevState.s_6_11, giaEmployee]
                }))
            }
            for (let time of giaEmployee.availability.sun) {
                if (time === "10:00 AM - 12:00 PM") this.setState(prevState => ({
                    su_10_12: [...prevState.su_10_12, giaEmployee]
                }))
                if (time === "12:00 PM - 2:00 PM") this.setState(prevState => ({
                    su_12_2: [...prevState.su_12_2, giaEmployee]
                }))
                if (time === "2:00 PM - 4:00 PM") this.setState(prevState => ({
                    su_2_4: [...prevState.su_2_4, giaEmployee]
                }))
                if (time === "4:00 PM - 6:00 PM") this.setState(prevState => ({
                    su_4_6: [...prevState.su_4_6, giaEmployee]
                }))
                if (time === "6:00 PM - 11:00 PM") this.setState(prevState => ({
                    su_6_11: [...prevState.su_6_11, giaEmployee]
                }))
            }    
        }
    }

    getEmployees(employees) {
        return employees.map(function(employee) {
            return <Dropdown.Item eventKey={employee}>{employee.name}</Dropdown.Item>
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <NavBar />
                    <img src={require('../images/loading.jpg')} style={{
                        position: "absolute",
                        top: "0", left: "0", right: "0", bottom: "0",
                        margin: "auto"}} />
                </div>
            )
        } else {
        return (
            <div>
                <NavBar />
                <div className="container-fluid">
                    <div className='jumbotron'>
                        <h1 className='display-4'>Pick a schedule for GIAs</h1>
                    </div>
                    <div>
                        <Table responsive="sm" hover>
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
                                    <DropDown employees={this.state.m_10_12} direction="right" onSelect={this.handleSelect} meta="m_10_12"/>
                                </td>
                                <td>
                                    <DropDown employees={this.state.t_10_12} direction="right" onSelect={this.handleSelect} meta="t_10_12" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.w_10_12} direction="right" onSelect={this.handleSelect} meta="w_10_12" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.th_10_12} direction="right" onSelect={this.handleSelect} meta="th_10_12" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.f_10_12} direction="right" onSelect={this.handleSelect} meta="f_10_12" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.s_10_12} direction="right" onSelect={this.handleSelect} meta="s_10_12" />                                   
                                </td>
                                <td>
                                    <DropDown employees={this.state.su_10_12} direction="left" onSelect={this.handleSelect} meta="su_10_12" />
                                </td>
                            </tr>
                            <tr>
                                <td>12-2pm</td>
                                <td>
                                    <DropDown employees={this.state.m_12_2} direction="right" onSelect={this.handleSelect} meta="m_12_2" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.t_12_2} direction="right" onSelect={this.handleSelect} meta="t_12_2" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.w_12_2} direction="right" onSelect={this.handleSelect} meta="w_12_2" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.th_12_2} direction="right" onSelect={this.handleSelect} meta="th_12_2" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.f_12_2} direction="right" onSelect={this.handleSelect} meta="f_12_2" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.s_12_2} direction="right" onSelect={this.handleSelect} meta="s_12_2" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.su_12_2} direction="left" onSelect={this.handleSelect} meta="su_12_2" />
                                </td>
                            </tr>
                            <tr>
                                <td>2-4pm</td>
                                <td>
                                    <DropDown employees={this.state.m_2_4} direction="up" onSelect={this.handleSelect} meta="m_2_4" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.t_2_4} direction="up" onSelect={this.handleSelect} meta="t_2_4" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.w_2_4} direction="up" onSelect={this.handleSelect} meta="w_2_4" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.th_2_4} direction="up" onSelect={this.handleSelect} meta="th_2_4" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.f_2_4} direction="up" onSelect={this.handleSelect} meta="f_2_4" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.s_2_4} direction="up" onSelect={this.handleSelect} meta="s_2_4" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.su_2_4} direction="up" onSelect={this.handleSelect} meta="su_2_4" />
                                </td>
                            </tr>
                            <tr>
                                <td>4-6pm</td>
                                <td>
                                    <DropDown employees={this.state.m_4_6} direction="up" onSelect={this.handleSelect} meta="m_4_6" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.t_4_6} direction="up" onSelect={this.handleSelect} meta="t_4_6" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.w_4_6} direction="up" onSelect={this.handleSelect} meta="w_4_6" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.th_4_6} direction="up" onSelect={this.handleSelect} meta="th_4_6" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.f_4_6} direction="up" onSelect={this.handleSelect} meta="f_4_6" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.s_4_6} direction="up" onSelect={this.handleSelect} meta="s_4_6" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.su_4_6} direction="up" onSelect={this.handleSelect} meta="su_4_6" />
                                </td>
                            </tr>
                            <tr>
                                <td>6-11pm</td>
                                <td>
                                    <DropDown employees={this.state.m_6_11} direction="up" onSelect={this.handleSelect} meta="m_6_11" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.t_6_11} direction="up" onSelect={this.handleSelect} meta="t_6_11" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.w_6_11} direction="up" onSelect={this.handleSelect} meta="w_6_11" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.th_6_11} direction="up" onSelect={this.handleSelect} meta="th_6_11" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.f_6_11} direction="up" onSelect={this.handleSelect} meta="f_6_11" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.s_6_11} direction="up" onSelect={this.handleSelect} meta="s_6_11" />
                                </td>
                                <td>
                                    <DropDown employees={this.state.su_6_11} direction="up" onSelect={this.handleSelect} meta="su_6_11" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="success" onClick={this.submitSchedule}>Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
    }
}

export default Schedule;