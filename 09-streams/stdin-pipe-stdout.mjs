import stream, { Transform } from "stream";
import fs from "fs";

/* const filePath = './files/stdin-dump.txt';

const writeStream = fs.createWriteStream(filePath);

process.stdin.pipe(writeStream);
process.stdin.pipe(process.stdout); */

const uppreCaseStream = new Transform({
    transform(chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase();
        callback(null, upperCased);
    },
});

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
		const arrOfChars = chunk.toString().split("");
		const lastChar = arrOfChars.pop();
        const reversed = arrOfChars.reverse().concat(lastChar).join("");
        callback(null, reversed);
    },
});

process.stdin
	.pipe(uppreCaseStream)
	.pipe(reverseStream)
	.pipe(process.stdout);
