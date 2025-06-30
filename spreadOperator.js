const maxNumber = Math.max(33, 44, 55, 66, 77);
console.log(maxNumber);

const numbers = [22, 3, 5, 7, 44];
const maxNum = Math.max(...numbers);
console.log(...numbers);
console.log(maxNum);

// copy using spread operator
const friends = [22, 33, 44, 68];
const bondhu = friends;
const dosto = [...friends];

friends.push(120);

// add extra elements while copy
const newFriend = [...friends, 100, 200];

console.log(friends, bondhu, dosto, newFriend);
