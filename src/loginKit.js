import React, { useState, useEffect } from "react";
import NewRegisterForm from "./registerForm";
import NewLoginForm from "./loginForm";

const LoginButtons = (props) => {
    const [showSignUp, setSignUp] = useState(props.showSignUp);

    const toggleSignUp = () => {
        if (showSignUp == true) {
            setSignUp(false);
        } else {
            setSignUp(true);
        }
    };

    return (
        <div className="form-control" style={{ height: "auto", margin: "auto", width:"80%"}}>
            <div className="row">
                <div className="col ">
                    {showSignUp ? (
                        <button
                            className="form-control btn btn-outline-primary"
                            onClick={toggleSignUp}
                            disabled
                        >
                            Signup
                        </button>
                    ) : (
                        <button
                            className="form-control btn btn-outline-primary"
                            onClick={toggleSignUp}
                        >
                            Signup
                        </button>
                    )}
                </div>
                <div className="col">
                    {showSignUp ? (
                        <button
                            className="form-control btn btn-outline-primary"
                            onClick={toggleSignUp}
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            className="form-control btn btn-outline-primary"
                            onClick={toggleSignUp}
                            disabled
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
            {showSignUp ? (
                <NewRegisterForm toggleSignUp={toggleSignUp} />
            ) : (
                <NewLoginForm
                    toggleSignUp={toggleSignUp}
                    checkLogin={props.checkLogin}
                />
            )}
        </div>
    );
};
const LogoutKit = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0" style={{ position: "absolute", right: "20px" }}>
                <div>
                    <a href="/roles" style={{ padding: "15px" }}>
                        Assign Roles
                        </a>
                    <button
                        className="form-control btn btn-outline-primary"
                        onClick={props.toggleLogout}
                    >
                        Logout{" "}
                    </button>
                </div>
            </form>
        </div>
    );
};
const LoginKit = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0" style={{ position: "absolute", right: "20px" }}>
                <div>
                    <a href="/signup" style={{ padding: "15px" }}>
                        Signup
                        </a>
                    <a href="/login" style={{ padding: "15px" }}>
                        Login
                        </a>
                </div>
            </form>
        </div>
    );
};


export  {LoginKit,LogoutKit,LoginButtons};
