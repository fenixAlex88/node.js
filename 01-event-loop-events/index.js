const fs = require("fs");
const dns = require("dns");

function info(text) {
	console.log(text, performance.now().toFixed(2));
}

info("Program start");
// timeouts
setTimeout(() => info("Timeout 1"), 0);
setTimeout(() => {
  process.nextTick(() => info("Next tick 2"));
  info("Timeout 2");
}, 100);
// close events
fs.writeFile("test.txt", "Hello, Node.js", () =>
  info("File written")
);
// promises
Promise.resolve().then(() => info("Promise 1"));
// nextTick
process.nextTick(() => info("Next tick 1"));
// setImmediate (Check)
setImmediate(() => info("Immeddiate 1"));
// setInterval
let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`interval ${(intervalCount += 1)}`);
  if (intervalCount === 10) clearInterval(intervalId);
}, 10);
// I/O events
dns.lookup("google.com", (error, addr, family) =>
  info("DNS 1 google.com", addr)
);
dns.lookup("localhost", (error, addr, family) => {
  info("DNS 2 localhost", addr);
  Promise.resolve().then(() => info("Promise 2"));
  process.nextTick(() => info("Next tick 3"));
});

info("Program End");
