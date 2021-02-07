import {useState} from 'react';
import axios from 'axios';
import DepartmentData from '../Views/DepartmentData';

const Departments = () => {

    const getDepartmentUrl = 'http://localhost:9191/departments/';
    const [state, setState] = useState("");
    const catchString = "Please enter a valid Department ID.";

    const getDepartment = async (id) => {
        try {
            await axios.get(getDepartmentUrl+id)
            .then(resp => (setState(resp.data)));
        } catch {
            setState(catchString);
        }
        
    }

    return (
        <div className="departmentContainer">
            {console.log(state)}
            <h1>Departments</h1>
            <label htmlFor="departmentId">ID #:</label>
            <input type="text" placeholder="Enter an ID number" id="departmentId" onChange={e => (getDepartment(e.target.value))}/>
            <table className="table table-dark table-striped" id="department-table">
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Address</th>
                        <th>Department Code</th>
                    </tr>
                </thead>
                <tbody id="department-table-data">
                    {
                        state !== "" && state !== undefined ? (
                            <DepartmentData state={state}/>
                        ) : (
                            <tr>{catchString}</tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Departments;