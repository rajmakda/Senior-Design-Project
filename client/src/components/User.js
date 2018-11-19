import React, {Component} from 'react'
import Navbar from './Nav_Bar'
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button'
import Dropdown from 'react-bootstrap/lib/Dropdown'

class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            users: new Map()
        }
        this.renderUsers = this.renderUsers.bind(this);
    }

    componentDidMount() {
        fetch("/api/users/", {
            headers: {
                "x-access-token": localStorage.getItem('token')
            }
        }).then(res => res.text()).catch(err => console.log(err))
        .then(res => {
            let users = JSON.parse(res)
            let userState = new Map()
            users.forEach(element => {
                userState.set(element._id, element)
            });
            this.setState({
                users: userState,
                isLoading: false
            })
        }).catch(err => alert("No users found"))
    }

    renderUsers() {

        let handleSelect = (eventKey, event, userid) => {
            let user = (this.state.users).get(userid)
            user.typeofuser = event.target.innerHTML
            let updatedUsers = this.state.users
            updatedUsers.set(userid, user)
            this.setState({ users: updatedUsers })
        }

        let handleDelete = (userid) => {
            fetch("/api/users/"+userid, {
                method: "DELETE",
                headers: {
                    "x-access-token": localStorage.getItem('token')
                }
            }).then(res => res.text())
            .then(res => {
                if (res.err) return console.log(res.err)
                alert(res)
                window.location.reload()
            })
        }

        let handleSave = (userid) => {
            let url = "/api/users/" + userid;
            let data = {
                "user": (this.state.users).get(userid)
            }
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "x-access-token": localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json())
                .then(user => {
                    alert("Updated Successfully")
                })
        }

        let users = Array.from((this.state.users).values());
        return users.map(function(user) {
            return (
                <tr>
                    <td>{user.sjsuid}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                        <Dropdown onSelect={(eventKey, event) => handleSelect(eventKey, event, user._id)}>
                            <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
                                {user.typeofuser}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1">RA</Dropdown.Item>
                                <Dropdown.Item eventKey="2">admin</Dropdown.Item>
                                <Dropdown.Item eventKey="3">resident</Dropdown.Item>
                                <Dropdown.Item eventKey="3">gia</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>
                        <Button size="sm" style={{marginRight:"1%"}} onClick={() => handleSave(user._id)}>Update</Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <Navbar />
                    <img src={require('../images/loading.jpg')} style={{
                        position: "absolute",
                        top: "0", left: "0", right: "0", bottom: "0",
                        margin: "auto"
                    }} />
                    <h1>Loading</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <Navbar/>
                    <div className="container-fluid" style={{marginTop:'6%'}}>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>SJSU ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Type of user</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderUsers()}
                            </tbody>
                        </Table>
                    </div>
                </div>            
            )
        }
    }
}

export default User