import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';
import { PersonFill } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./containers/LoginPage/Login";
import Register from "./containers/RegisterPage/Register";
import HomePage from "./containers/HomePage";
import BoardUser from "./containers/BoardUser";
import BoardModerator from "./containers/BoardModerator";
import BoardAdmin from "./containers/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      console.log("user", currentUser);
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
  <>
    
   { currentUser && (
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          {showModeratorBoard && (
            <>
              <Navbar.Brand href="/home">BROMMA</Navbar.Brand>
              <Nav>
                <Nav.Link href="/mod">Dashboard</Nav.Link>
                <Nav.Link href="/mod">NewReuqest</Nav.Link>
              </Nav>
            </>
          )}

          {showAdminBoard && (
            <Nav>
              <Nav.Link href="/admin"> Admin Board</Nav.Link>
            </Nav>
          )}
          {currentUser && (
            <>
              {/* <Nav.Link href="/home">{currentUser.username}</Nav.Link> */}
              <Dropdown style={{position:"absolute",right:"60px"}}>

  <Dropdown.Toggle split  id="dropdown-split-basic">
  <PersonFill/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/login" onClick={logOut}>Logout</Dropdown.Item>
  
  </Dropdown.Menu>
</Dropdown>
             
            </>
          )}
        </Nav>
      </Navbar>
   )}
    <Router history={history}>
      <Switch>
        <Route  exact path="/login" component={Login} />
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/user" component={BoardUser} />
        <Route exact path="/mod" component={BoardModerator} />
        <Route exact path="/admin" component={BoardAdmin} />
      </Switch>

    </Router>
    </>
  );
};

export default App;
