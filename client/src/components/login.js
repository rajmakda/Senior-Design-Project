import React, { Component } from 'react';
import Navbar from './Nav_Bar';
import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        let credentials = {
            email: this.state.email,
            password: this.state.password
        }
        fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(credentials)
        }).then(res => {
            if(res.status === 200 || res.status === 401) return res.json();
            if(res.status === 404 || res.status === 500) return res.text();
        }).catch(err => console.log(err))
            .then(res => {
                if (res.auth === true) {
                    localStorage.setItem("auth", res.auth);
                    localStorage.setItem("token",res.token);
                    let promise = Promise.resolve(fetch("/api/auth/me", {headers: {"x-access-token": res.token}}))
                    promise.then(res => res.json()).then(res => localStorage.setItem("user", JSON.stringify(res)));
                    // const { from } = this.props.location.state || { from: { pathname: '/' } }
                    this.props.history.push("/");
                } else if (res.auth === false) {
                    alert("Invalid password");
                } else {
                    alert(res);
                }
            }).catch(err => console.log(err))
    }

    handleInputChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid text-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input type="email" name="email" className="form-control" value={this.state.email} placeholder="Enter Email" onChange={this.handleInputChange} required autoFocus />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input type="password" name="password" className="form-control" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
