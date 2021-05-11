import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import dotenv from "dotenv";

const NewRegisterForm = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [redirect, setRedirect] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
                name: userName
            }),
        };
        console.log("testing")
        let base_url = process.env.REACT_APP_URL;
        let second_arg = "users";
        let url = base_url + second_arg;
        console.log(url)
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if ("error" in data) {
                    console.log(data);
                    alert(data["error"]);
                } else {
                    props.toggleSignUp();
                }
            });
    };

    return (
        <form
            
            style={{ height: "auto", margin: "15px" }}
            onSubmit={handleSubmit}
        >
            <input
                className="form-control login-signup"
                type="text"
                placeholder="Enter your user name"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <input
                className="form-control login-signup"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="form-control login-signup"
                type="text"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="form-control   btn-primary login-signup"
                type="submit"
                value="Submit"
            />
        </form>
    );
};

export default NewRegisterForm;
