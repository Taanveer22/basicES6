// for of use in array,string like iterator things
// for in use in object like non-iterator thing

//iterator array looping using for of
const numbers = [1, 2, 4, 5, 7];
for (let number of numbers) {
    console.log(number);
}

//iterator string looping using for of
const nobab = 'siraj ud doula';
for (let letter of nobab) {
    console.log(letter);
}

// object looping using for in
const actor = {
    name: 'ananta',
    age: 40,
    phone: 88888888,
    money: 809808008080809
}
for (key in actor) {
    // for accesing object values
    const value = actor[key];
    console.log(key, value);
}
// optional
// non-iterator object looping using for of
const glass = {
    name: 'melamine',
    color: 'green',
    price: 12,
    isCleaned: true
}

const myKeys = Object.keys(glass);
console.log(myKeys);

for (key of myKeys) {
    console.log(key);
}
