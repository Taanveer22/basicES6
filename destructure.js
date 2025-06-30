const actor = {
    name: 'ananta',
    age: 40,
    phone: 88888888,
    money: 809808008080809
}

const { money, phone, age, name } = actor;
console.log(money, phone, age, name);

// array
const numbers = [45, 99];
const [b, a] = numbers;
console.log(b, a);

// advanced array destructure using function
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [first, second] = doubleThem(6, 9);
console.log(first,second);
