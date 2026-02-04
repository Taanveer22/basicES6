// 🟠11. Bonus Mini Project Task

// You have this array:
// const products = [
//   { name: "Phone", price: 20000 },
//   { name: "Laptop", price: 80000 },
//   { name: "Headphone", price: 3000 }
// ];

// Task:
// Using ES6 features:
// Extract all product names into a new array

// Print:
// Product: Laptop costs 80000 taka
// for each item

const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 80000 },
  { name: "Headphone", price: 3000 },
];

for (element of products) {
  // console.log(element);
  // console.log(element.name);
  // console.log(element.price);
  console.log(`${element.name} cost ${element.price} taka`)
}
