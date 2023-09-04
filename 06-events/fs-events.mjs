import { EventEmitter } from "events";
import fs from "fs";

const fileEmiter = new EventEmitter();

const filePath = "./first-event.txt";

fileEmiter.on("writeComplete", () => {
    console.log(`File ${filePath} was written`);
    fs.appendFileSync(filePath, "\nOne more line", () => {
        fileEmiter.emit("appendComplete");
    });
});

fileEmiter.on("appendComplete", () => {
    console.log(`Appended text to the ${filePath} file`);
    fs.renameSync(filePath, "./renamed-first-event.txt", () => {
        fileEmiter.emit("renameComplete");
    });
});

fileEmiter.on("renameComplete", () => {
    console.log(`File ${filePath} was renamed`);
});

fs.writeFileSync("./first-event.txt", "First event text file", () =>
    fileEmiter.emit("writeComplete"),
);
