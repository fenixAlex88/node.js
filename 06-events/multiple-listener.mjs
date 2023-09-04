import { EventEmitter } from "events";

const myEmiter = new EventEmitter();

myEmiter.on("myEvent", () => {
    console.log("First event listener");
});

myEmiter.on("myEvent", () => {
    console.log("Second event listener");
});
myEmiter.on("otherEvent", () => {
    console.log("Other event listener");
});

myEmiter.setMaxListeners(15);
console.log(myEmiter.getMaxListeners());

console.log(myEmiter.eventNames());

setTimeout(() => myEmiter.emit("myEvent"), 1000);
