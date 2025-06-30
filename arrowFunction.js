// function declaretion
function add1(num1, num2) {
    return num1 + num2; 
}

// function expression
const add2 = function(number1, number2) {
    return number1 + number2;
}

// arrow function
const add3 = (a, b) => a + b

const sum1 = add1(4, 5);
const sum2 = add2(5, 6);
const sum3 = add3(44, 55);

console.log(sum1, sum2, sum3);
