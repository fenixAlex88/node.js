const http = require("http");
const {
    getHtml,
    getText,
    getComments,
    handelNotFound,
    postComment,
    getHome,
} = require("./handlers");

const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        return getHome(req, res);
    }
    if (req.method === "GET" && req.url === "/http") {
        return getHtml(req, res);
    }
    if (req.method === "GET" && req.url === "/text") {
        return getText(req, res);
    }

    if (req.method === "GET" && req.url === "/comments") {
        return getComments(req, res);
    }
    if (req.method === "POST" && req.url === "/comments") {
        return postComment(req, res);
    }
    handelNotFound(req, res);
});

server.listen(PORT, () => console.log(`server was launched on port ${PORT}`));
