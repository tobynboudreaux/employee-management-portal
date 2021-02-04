import React, {useState} from 'react';
import axios from 'axios';

const addUserUrl = 'http://localhost:9191/users/';

export default class AddUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            departmentId: 0
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        

        handleChange(event) {
            this.setState({[event.target.name]: event.target.value});
        }

        handleSubmit(event) {
            //event.preventDefault();
            axios.post(
                addUserUrl,
                this.state
            ).then(resp => console.log(resp));
        }

        render() {
            return (
                <div>
                    <div className="userForm-container">
                        <h2>Add User</h2>
                        <form onSubmit={this.handleSubmit} action="/users">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter first name" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter last name" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Date of Last Update:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="departmentId">Department ID:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter department id" name="departmentId" id="departmentId" value={this.state.departmentId} onChange={this.handleChange} required></input>
                            </div>
                            <button type="submit" className="btn btn-primary" id="record-submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
}