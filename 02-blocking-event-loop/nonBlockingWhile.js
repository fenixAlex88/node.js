let isRunning = true;

setTimeout(() => (isRunning = false), 10);

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve(console.log("-------------")));
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log("While loop is running...");
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log("whileLoop end"));
