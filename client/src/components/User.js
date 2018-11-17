import React, {Component} from 'react'
import Navbar from './Nav_Bar'
import Table from 'react-bootstrap/lib/Table'
import Button from 'react-bootstrap/lib/Button'

class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            users: []
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
            this.setState({
                users: users,
                isLoading: false
            })
        }).catch(err => alert(err))
    }

    renderUsers() {
        let users = this.state.users;
        return users.map(function(user) {
            return (
                <tr>
                    <td>{user.sjsuid}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.typeofuser}</td>
                    <td>
                        <Button size="sm">Update</Button>
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