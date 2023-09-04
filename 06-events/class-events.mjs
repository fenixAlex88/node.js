import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likeQty = 0;
        this.on("likePost", (userName) => {
            console.log(`Post liked by ${userName}!!!`);
        });
        this.on("error", (err) => {
            console.error(err);
        });
    }

    like(userName) {
        if (!userName) {
            return this.emit("error", new Error("No user name"));
        }
        this.likeQty += 1;
        this.emit("likePost", userName);
    }
}

const myPost = new Post("Alex", "My greate post!!!");

console.log(myPost.author);
console.log(myPost.text);
console.log(myPost.likeQty);
myPost.like("Alex");
setTimeout(() => {
    myPost.like("John");
}, 1000);
setTimeout(() => {
    myPost.like();
}, 2000);
console.log(myPost.likeQty);
