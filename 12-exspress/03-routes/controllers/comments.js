const getCommentsHandler = (req, res) => {
    console.log("Get comments route");
    res.send("Get comments route");
};

const getSingleCommentHandler = (req, res) => {
    console.log(req.params);
    res.send(`Get comment route. Comment id ${req.params.comentId}`);
};

const postCommentsHandler = (req, res) => {
    console.log("Post comments route");
    res.send("Post comments route");
};

const deleteSingleCommentHandler = (req, res) => {
    console.log("Delete comment route");
    res.send(`Delete comment route. Comment id ${req.params.comentId}`);
};

module.exports = {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler,
};