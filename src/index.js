import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import "./index.css";

import UserRoles from "./userRoles";

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { isLoggedIn, logOut } from "./utils/auth.js";
import { LoginKit, LogoutKit, LoginButtons } from "./loginKit";

const jwt = require("jsonwebtoken");

const ImporvedHomePage = (props) => {
    const [loggedIn, setloggedIn] = useState(isLoggedIn());
    // const [showSignUp,setShowSignUp] = useState(false);
    useEffect(() => {
        setloggedIn(isLoggedIn());
    }, [loggedIn]);
    const checkLogin = () => {
        setloggedIn(isLoggedIn());
    };
    const toggleLogout = () => {
        console.log("Reached");
        logOut();
        setloggedIn(false);
    };

    return (
        <Router>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/dashboard">
                            Login System
                        </a>
                        <div>
                            {loggedIn ? (
                                <LogoutKit toggleLogout={toggleLogout} />
                            ) : (
                                <LoginKit />
                            )}
                        </div>
                    </nav>
                </div>

                <div className="container">
                    <div>ESOPS</div>

                    <div className="row ">
                        <Switch>
                            <Route path="/login">
                                <LoginButtons checkLogin={checkLogin} showSignUp={false} />
                            </Route>

                            <Route path="/signup">
                                <LoginButtons checkLogin={checkLogin} showSignUp={true} />
                            </Route>
                            <PrivateRoute component={UserRoles} path="/roles" exact />

                        </Switch>
                    </div>
                </div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            </div>
        </Router>
    );
};


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLoggedIn() ?
                <Component {...props} />
                : <Redirect to="/signup" />
        )} />
    );
};



// ========================================

ReactDOM.render(<ImporvedHomePage />, document.getElementById("root"));
