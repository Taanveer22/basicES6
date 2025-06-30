// two three four many parameters
const difference = (a, b) => a - b;
const multiply = (a, b, c) => a * b * c;

const math1 = difference(3, 1);
const math2 = multiply(3, 3, 2);
console.log(math1, math2);

//one parameter
const student = {
    name: 'ananata',
    age: 20
}
const getAge = (person) => person.age;
const outputAge = getAge(student);
console.log(outputAge);

// one parameter
const mynumbers = [22, 33, 44, 55];
const getThird = numbers => numbers[2];
const outputThird = getThird(mynumbers);
console.log(outputThird); 

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function (need to write return)
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}

console.log(doMath(2,4,6));