import React, {useState} from 'react';
import axios from 'axios';

const addDepartmentUrl = 'http://localhost:9191/departments/';

export default class AddDepartment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            departmentName: "",
            departmentAddress: "",
            departmentCode: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

        

        handleChange(event) {
            this.setState({[event.target.name]: event.target.value});
        }

        handleSubmit(event) {
            event.preventDefault();
            axios.post(
                addDepartmentUrl,
                this.state
            ).then(resp => console.log(resp));
        }

        render() {
            return (
                <div>
                    <div className="departmentForm-container">
                        <h2>Add Department</h2>
                        <form onSubmit={this.handleSubmit} action="/departments">
                            <div className="form-group">
                                <label htmlFor="departmentName">Department Name:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter department name" name="departmentName" id="departmentName" value={this.state.departmentName} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="departmentAddress">Department Address:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter department address" name="departmentAddress" id="departmentAddress" value={this.state.departmentAddress} onChange={this.handleChange} required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="departmentCode">Department Code:</label>
                                <input type="text" className="form-control col-sm-4" placeholder="Enter department code" name="departmentCode" id="departmentCode" value={this.state.departmentCode} onChange={this.handleChange} required></input>
                            </div>
                            <button type="submit" className="btn btn-primary" id="record-submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
}