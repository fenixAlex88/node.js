const path = require("path");

const filePath = "C:\\users\\Alex\\index.js";

const relativePath = "./node/movie.mov";

const ditectoryPath = "./node/subfolder"

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(relativePath));

console.log(path.basename(relativePath));
console.log(path.basename(ditectoryPath));

console.log(path.dirname(filePath));
console.log(path.dirname(ditectoryPath));

console.log(path.resolve(relativePath));

console.log(path.extname(filePath));
console.log(path.extname(ditectoryPath));

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir,`renamed-${parsedPath.name}.mjs`));