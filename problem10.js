// 🟡 10. Combine Everything Challenge 🔥

// Write a function createUserProfile(user) that takes:
// {
//   name: "Taanveer",
//   skills: ["HTML", "CSS", "JS"]
// }

// Return output:
// Hello Taanveer! You know HTML, CSS, JS.

const user = {
  name: "Taanveer",
  skills: ["HTML", "CSS", "JS"],
};

const createUserProfile = (user) => {
  const { name, skills } = user;
  console.log(skills);
  const text = `Hello ${name} ! You know ${skills}`;
  return text;
};

console.log(createUserProfile(user));
