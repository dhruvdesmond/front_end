const jwt = require("jsonwebtoken");

export const isLoggedIn = () => {
    if (!localStorage.getItem("auth_token")) {
        logOut();
        return false;
    }

    const time1 = Date.now();
    const time2 = localStorage.getItem("loginTime");

    var date = new Date(time1);
    var date2 = new Date(parseInt(time2) + 24 * 60 * 60 * 1000);

    if (localStorage.getItem("auth_token") && date < date2) {
        console.log("Logged In");
        return true;
    } else {
        console.log("Logged Out");
        logOut();
        return false;
    }
};

export const logOut = () => {
    localStorage.clear();
};
