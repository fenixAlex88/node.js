const comments = require("./data");
const fs = require("fs");
const qs = require("querystring");

function getHome(req, res) {
    fs.readFile("./files/comment-form.html", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Server error while loadind HTML file");
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
}

function getHtml(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greetings from the HTTP server!</h1>");
    res.write("</html></body></div>");

    res.end();
}

function getText(req, res) {
    console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Greetings from the HTTP server!");
}

function getComments(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify(comments));
}

function postComment(req, res) {
    res.setHeader("Content-Type", "text/plain");
    console.log(req.headers["content-type"]);

    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
        let body = "";
        req.on("data", (chank) => {
            body += chank.toString();
            console.log(chank.toString());
        });
        req.on("end", () => {
            try {
                const coment = qs.parse(body);
                comments.push(coment);
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write("<h1>Comment data was received</h1>");
                res.write("<a href='/'>Add one more coment</a>");
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid Form data");
            }
        });
    } else if (req.headers["content-type"] === "aplication/json") {
        let comment = "";

        req.on("data", (chank) => {
            comment += chank;
            console.log(chank.toStiing());
        });
        req.on("end", () => {
            try {
                console.log(comment);
                comments.push(JSON.parse(comment));
                res.statusCode = 200;
                res.end("Comment data was received");
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        });
    } else {
        res.statusCode = 400;
        res.end("Data must be in the JSON format or as form");
    }
}

function handelNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Page not found!</h1>");
}

module.exports = { getHtml, getComments, getText, postComment, handelNotFound, getHome };
