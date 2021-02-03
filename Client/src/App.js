import logo from './logo.svg';
import './App.css';
import Users from './/Components/Users';
import Navbar from './Components/Navbar';
import Homepage from './Views/Homepage';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/users' component={Users}/>
      </Switch>
    </Router>
  );
}

export default App;
