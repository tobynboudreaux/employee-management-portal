import {Fragment} from 'react';

const DepartmentData = ({state}) => {
    return(
        <Fragment>
             { state.departmentId ? (
                <tr>
                    <td>{state.departmentId}</td>
                    <td>{state.departmentName}</td>
                    <td>{state.departmentAddress}</td>
                    <td>{state.departmentCode}</td>
                </tr>
                ) : (
                    <tr>
                        <td>Department does not exist.</td>
                    </tr>
                )
            }
        </Fragment>
    )
}

export default DepartmentData;