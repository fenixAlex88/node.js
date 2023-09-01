const fs = require("fs/promises");

fs.writeFile("./first-promise.txt", "First text file")
    .then(() => {
        console.log("File first-promise.txt was written");
        fs.appendFile("./first-promise.txt", "\nOne more line");
    })
    .then(() => {
        console.log("Appended text to the first-promise.txt file");
        fs.rename("./first-promise.txt", "./renamed-first-promise.txt");
    })
    .then(() => {
        console.log("File first-promise.txt was renamed");
    })
    .catch((err) => console.log(err));
