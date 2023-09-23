const express = require("express");
const { getUsersHandler, postUsersHandler, getSingleUserHandler } = require("../controllers/users");

const router = express.Router();


router.route("/").get(getUsersHandler).post(postUsersHandler);
router.get("/:userId", getSingleUserHandler);

module.exports = router;
