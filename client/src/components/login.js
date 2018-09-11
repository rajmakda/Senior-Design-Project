import React, { Component } from 'react';
import './login.css';
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password:""
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
        }).then(res => res.json()).catch(err => console.log(err))
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err))
        this.props.history.push("/");
    }

    handleInputChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="container text-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input type="email" name="email" className="form-control" value={this.state.email} placeholder="Enter Email" onChange={this.handleInputChange} required autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" className="form-control" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} required/>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;