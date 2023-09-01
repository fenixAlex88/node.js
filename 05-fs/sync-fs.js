const fs = require("fs/promises");
try {
	fs.writeFileSync("./first-Sync.txt", "First Sync text file");
    console.log("File first-Sync.txt was written");
    fs.appendFileSync("./first-Sync.txt", "\nOne more line");
    console.log("Appended text to the first-Sync.txt file");
    fs.renameSync("./first-Sync.txt", "./renamed-first-Sync.txt");
    console.log("File first-Sync.txt was renamed");
} catch (error) {
	console.log(error)
}