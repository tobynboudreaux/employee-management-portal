import {Fragment} from 'react';

const UserData = ({state}) => {
    return(
        <Fragment>
             { state.user ? (
                <tr>
                    <td>{state.user.userId}</td>
                    <td>{state.user.firstName}</td>
                    <td>{state.user.lastName}</td> 
                    <td>{state.user.email}</td>
                    <td>{state.department.departmentId}</td>
                    <td>{state.department.departmentName}</td>
                    <td>{state.department.departmentAddress}</td>
                    <td>{state.department.departmentCode}</td>
                </tr>
                ) : (
                    <tr>
                        <td>User does not exist.</td>
                    </tr>
                )
            }
        </Fragment>
    )
}

export default UserData;