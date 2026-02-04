// 🟢 8. Object Destructuring

// Given:
// const student = {
//   id: 101,
//   name: "Rahim",
//   dept: "CSE"
// };
// Extract name and dept using destructuring.

const student = {
  id: 101,
  name: "Rahim",
  dept: "CSE",
};

const { name, dept } = student;
console.log(name, dept);
