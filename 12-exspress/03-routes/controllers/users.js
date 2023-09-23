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

module.exports = { getUsersHandler, getSingleUserHandler, postUsersHandler };