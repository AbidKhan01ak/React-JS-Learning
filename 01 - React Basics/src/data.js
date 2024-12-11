import controlImg from './assets/control.png';
import functionImg from './assets/function.png';
import dataImg from './assets/data.png';
import variablesImg from './assets/variables.png';

// data.js
export const CORE_CONCEPTS = [
  {
    title: "Variables and Data Types",
    image: variablesImg,
    description: "Learn how to store and manipulate data using variables and various data types like strings, numbers, and booleans."
  },
  {
    title: "Control Flow",
    image: controlImg,
    description: "Understand conditional statements and loops to control the flow of your program."
  },
  {
    title: "Functions",
    image: functionImg,
    description: "Discover how to write reusable blocks of code with functions, including parameters and return values."
  },
  {
    title: "Data Structures",
    image: dataImg,
    description: "Master fundamental data structures like arrays, objects, and dictionaries to organize and process data."
  }
];
const firstname = "firstname"
export const EXAMPLES = {
  variables: {
    title: "Variables and Data Types Example",
    description: "Declaring variables and using them to perform operations.",
    code: `
    const firstname = "Alice";
    console.log(\`${firstname}\`);`
  },
  controlFlow: {
    title: "Control Flow Example",
    description: "Using if-else statements and loops.",
    code: `let age = 25;
          if (age > 18) {
            console.log("Adult");
          } else {
            console.log("Minor");
          }

        for (let i = 0; i < 5; i++) {
          console.log(i);
        }`
  },
  functions: {
    title: "Functions Example",
    description: "Defining and calling a function.",
    code: `
    function greet(name) {
      return \`Hello, ${name}!\`;
      }

    console.log(greet("Alice"));`
  },
  dataStructures: {
    title: "Data Structures Example",
    description: "Working with arrays and objects.",
    code: `
    let fruits = ["apple", "banana", "cherry"];
    fruits.push("date");
    console.log(fruits);

    let person = {
      name: "Alice",
      age: 25
    };
    console.log(person.name);`
  }
};
