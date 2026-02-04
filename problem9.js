// 🟡 9. Loop Through Object

// Given:
// const person = {
//   name: "Karim",
//   age: 25,
//   city: "Dhaka"
// };

// Loop through the object and print:
// name: Karim
// age: 25
// city: Dhaka

const person = {
  name: "Karim",
  age: 25,
  city: "Dhaka",
};

for (let item in person) {
  // console.log(item);
  // console.log(person[item]);
  console.log(item + " : " + person[item]);
}
