// 🟢 2. Default Parameter

// Write a function greet(name = "Guest")
// that returns:
// Hello, name!

// Example:
// greet("Taanveer") → Hello, Taanveer!
// greet() → Hello, Guest!

function greet(name = "guest") {
  message = "Hello " + name;
  return message;
}

console.log(greet());
console.log(greet("sorna"));
