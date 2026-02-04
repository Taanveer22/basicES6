// 🟢 6. Spread Operator (Object)

// Given:
// const user = { name: "Taanveer", age: 22 };

// Create a new object adding:
// country: "Bangladesh"

const user = { name: "Taanveer", age: 22 };
const newUser = { ...user, country: "Bangladesh" };
console.log(newUser);
