import logo from './logo.svg';
import './App.css';
import Users from './/Components/Users';
import Navbar from './Components/Navbar';
import Homepage from './Views/Homepage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Departments from './Components/Departments';
import AddUser from './Components/AddUser';
import AddDepartment from './Components/AddDepartment';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/departments' component={Departments}/>
        <Route exact path='/addUser' component={AddUser}/>
        <Route exact path='/addDepartment' component={AddDepartment}/>
      </Switch>
    </Router>
  );
}

export default App;
