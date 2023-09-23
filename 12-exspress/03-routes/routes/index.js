const express = require("express");
const commentsRouter = require("./comments");
const usersRouter = require("./users");
const rootRouter = require("./root");

const router = express.Router();

router.use("/", rootRouter);
router.use("/comments", commentsRouter);
router.use("/users", usersRouter);

module.exports = router;
