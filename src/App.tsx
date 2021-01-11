import React from 'react';
import './App.css';
import { LoginComponent } from './components/LoginComponent';
import CreateUser from './components/CreateUser';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route, Link, useHistory as history} from "react-router-dom";
import AdminPanel from './components/AdminPanel';
import ToDoList from './components/ToDoList';
// import { UpdateUser } from './components/UpdateUser';


function App() {

  return (
    <Router history={history()} >
            
                <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/Home" className="navbar-brand">
              To Do List
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/Login"} className="nav-link">
                Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/CreateUser"} className="nav-link">
                Create User
                </Link>
              </li>
            </div>
          </nav>
            <div id="App-content">
            <Switch >
                <Route exact path={["/", "/Home"]} /> 
                <Route path="/Login" exact component={LoginComponent} />
                <Route path="/CreateUser" exact component={CreateUser}/>
                <Route path="/AdminPanel" exact component={AdminPanel}/>
                <Route path="/ToDoList:userID" exact component={ToDoList}/>
                {/* <Route path="/UpdateUser" exact component={UpdateUser}/> */}
            </Switch>
            </div>
    </Router>

  );
}

export default App;

