import { EventEmitter } from 'events';

const myEmiter = new EventEmitter();

const timeoutListenerFn = (seconds) => {
    console.log(`Timeout event in ${seconds} seconds!`);
};

myEmiter.on("timeout", timeoutListenerFn);


setTimeout(()=>myEmiter.emit("timeout", 1), 1000)
setTimeout(()=>myEmiter.emit("timeout", 2), 2000)
setTimeout(()=>myEmiter.emit("timeout", 4), 4000)


myEmiter.once('singleEvent', ()=>{
	console.log(`Single event occurred`);
})

setTimeout(() => myEmiter.emit('singleEvent'), 500);
setTimeout(() => myEmiter.emit('singleEvent'), 1500);

setTimeout(() => myEmiter.off("timeout", timeoutListenerFn), 3000);
setTimeout(() => myEmiter.emit("timeout", 3), 3000);

