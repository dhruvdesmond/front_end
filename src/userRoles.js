import React, { useState, useEffect } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import dotenv from "dotenv";

const UserRoles = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json", auth_token: token },
            body: JSON.stringify(),
        };
        let first = process.env.REACT_APP_URL;
        let second_arg = "users/roles";
        let url = first + second_arg;
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if ("error" in data) {
                    console.log(data);
                } else {
                    console.log("users arrived --->>>>  ",data)

                    setUsers(data);
                }
            });
    },[]);
    
    return (

        <div className="form-control ">
            <div className="row">
                <div className="col-3">#</div>
                <div className="col-3">Name</div>
                <div className="col-3">Role</div>
                <div className="col-3"></div>
                
            </div>
            {users.map((user,index) => (
                <div key ={user.id}><User user={user} index={index}/></div>
                
                
            ))}            
        </div>
    );
};

const User = (props)=>{
    const user = props.user
    // const user_role = 
    const [userRole, setUserRole] = useState(user['roles'][0]['id']);
    const handleSubmit = (event) => {
        event.preventDefault();   
        console.log("test2 -> ",event.target)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                role_id: userRole
            }),
        };
        console.log("testing")
        let base_url = process.env.REACT_APP_URL;
        // const user_id = localStorage.getItem("user_id");
        let second_arg = "users/" + user.id + "/role"
        let url = base_url + second_arg;
        console.log(url)
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if ("error" in data) {
                    console.log(data);
                    alert(data["error"]);
                } else {
                    // props.toggleSignUp();
                    console.log("Role updated !!")
                    console.log(data)
                }
            });
    }
    const handleRoleChange = (e) =>{
        console.log("test1 -> ",e.target.value)
        setUserRole(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div
                className="row" style={{ height: "100%", padding: "20px" }}
            >
                <div className="col-3">{props.index + 1}</div>
                <div className="col-3"> {user.name}</div>
                <select type="text" className="form-control col-3" value={userRole} onChange={handleRoleChange}>
                    <option value="1">User</option>
                    <option value="2">Admin</option>
                    {/* <option value="100">100</option> */}
                </select>
                {/* <div className="col-3"> {user['roles'][0]['name']}</div> */}
                <div className="col-3"> <button>Save</button></div>
            </div>
        </form>
    )
}




export default UserRoles;
