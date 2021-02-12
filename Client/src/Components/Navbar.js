import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm fixed-top">
                <div className="my-container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink exact to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/users'>Users</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/departments'>Departments</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/addUser'>Add User</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to='/addDepartment'>Add Department</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;