const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Response from express"));

app.listen(5000, () => console.log("Server was started on port 5000"));
