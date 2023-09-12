const express = require("express");

const app = express();

const getRootHandler = (req, res) => {
    console.log("Get root route");
    res.send("Get root route");
};

const getUsersHandler = (req, res) => {
    console.log("Get users route");
    res.send("Get users route");
};

const getSingleUserHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get user route. User id ${req.params.userId}`);
};

const postUsersHandler = (req, res) => {
    console.log("Post users route");
    res.send("Post users route");
};

app.get("/", getRootHandler);

app.get("/users", getUsersHandler);
app.post("/users", postUsersHandler);
app.get("/users/:userId", getSingleUserHandler);

app.listen(5000, () => console.log("Server was started on port 5000"));
