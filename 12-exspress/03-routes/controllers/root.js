const getRootHandler = (req, res) => {
    console.log("Get root route");
    res.send("Get root route");
};

module.exports = { getRootHandler };