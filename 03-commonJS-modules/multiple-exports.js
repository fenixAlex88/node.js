const myName = 'Alex';
const myHobbies = ['swimming', 'cycling'];
const myFavoritNumber = '7';

console.log('Console log from multiple exports');

module.exports.myName = myName;
module.exports.myFavoritNumber = myFavoritNumber;
module.exports.myHobbies = myHobbies;
