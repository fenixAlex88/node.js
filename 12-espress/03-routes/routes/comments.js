const express = require("express");
const {
    getCommentsHandler,
    postCommentsHandler,
    getSingleCommentHandler,
    deleteSingleCommentHandler,
} = require("../controllers/comments");

const router = express.Router();

router.route("/").get(getCommentsHandler).post(postCommentsHandler);
router.get("/:comentId", getSingleCommentHandler);
router.delete("/:comentId", deleteSingleCommentHandler);

module.exports = router;
