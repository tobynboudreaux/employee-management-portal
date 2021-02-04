import axios from 'axios';
import {useState} from 'react';
import UserData from '../Views/UserData';

const Users = () => {

    const getUsersUrl = 'http://localhost:9191/users/';
    const [state, setState] = useState("");
    const catchString = "Please enter a valid User ID.";

    const getUser = async (id) => {
        try {
            await axios.get(getUsersUrl+id)
            .then(resp => (setState(resp.data)));
        } catch {
            setState(catchString);
        }
        
    }

    return (
        <div className="userContainer">
            <h1>User</h1>
            <input type="text" placeholder="Enter an ID number" id="userId" onChange={e => (getUser(e.target.value))}/>
            <table className="table table-dark table-striped" id="user-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Department Address</th>
                        <th>Department Code</th>
                    </tr>
                </thead>
                <tbody id="user-table-data">
                    {
                        state !== "" && state !== undefined ? (
                            <UserData state={state}/>
                        ) : (
                            <tr>{catchString}</tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Users;