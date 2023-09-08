import http from "http";
import fs from "fs";

const filePath = "./files/index.html";

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        readStream.pipe(res);
    }

    if (req.url === "/no-stream" && req.method === "GET") {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Erroe reading file");
            }
            res.statusCode = 200;
            res.setHeader("Content-type", "text/html");
            res.end(data);
        });
    }
});

server.listen(5000, () => {
    console.log("Server is listening on 5000 port");
});
