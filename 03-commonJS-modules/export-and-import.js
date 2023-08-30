const { myName, myHobbies } = require('./multiple-exports');

const myFriendName = 'Ihar';

module.exports.myName = myName;
module.exports.myFriendName = myFriendName;
module.exports.myGreateHobbies = myHobbies;