/* console.log(arguments.callee.toString());
console.log("-----------------__dirname---------------------");
console.log(__dirname);
console.log("-------------------__filename-------------------");
console.log(__filename);
console.log("------------------module--------------------");
console.log(module);
console.log("------------------exports--------------------");
console.log(exports);
console.log("------------------require--------------------");
console.log(require); */

const { myName, myHobbies, myFavoritNumber } = require('./multiple-exports');
const greetingFn = require('./single-export');
// const greetingFn = require(`e:\\projects\\node\\03-commonJS-modules\\single-export.js`);
const { myName: myOtherName, myFriendName, myGreateHobbies } = require('./export-and-import');


console.log(myName);
console.log(myHobbies);
console.log(myFavoritNumber);

myHobbies.push('climbing');

greetingFn(myName);

console.log(myOtherName);
console.log(myFriendName);
console.log(myGreateHobbies);
