const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.end("Greetings from the HTTP server!");
});

server.listen(PORT, () => console.log(`server was launched on port ${PORT}`));
