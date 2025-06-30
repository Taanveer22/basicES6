// default value for numbers
function add(num1 = 5, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
 add(5, 7);
//  add(5)

// default value for strings
function fullName(first, last='') {
    const full = first + ' ' + last;
    console.log(first, last, full);
    return full;
}
fullName('tanvir')

// default value for array
function myArray(numbers = []) {
    
}

// default value for object 
function myObject(names = {}) {
    
}

// 



