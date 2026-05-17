# Task 06: JavaScript Basics

**Difficulty:** ★★☆☆☆ (Beginner-Intermediate)
**Module:** JavaScript Foundations
**Time estimate:** 2-3 hours

## What You'll Learn

- What JavaScript is and how it runs
- Variables (`let`, `const`)
- Data types (strings, numbers, booleans, arrays, objects)
- Functions
- Conditionals (`if`, `else`)
- Loops (`for`, `while`)
- How to use the browser console and Node.js

## Background

HTML = structure, CSS = style, **JavaScript = behavior**. JavaScript makes webpages interactive - clicking buttons, showing/hiding content, fetching data, animations, and everything else that "does something."

JavaScript can run in two places:
1. **Browser** - built into every web browser
2. **Node.js** - lets you run JavaScript outside the browser (on your computer)

For this task, you'll write JavaScript that runs in **Node.js** (terminal) to focus on the language itself without HTML distractions.

### Running JavaScript

```bash
# Run a .js file with Node.js
node myfile.js

# Or open an interactive console
node
> 2 + 2
4
> "hello".toUpperCase()
'HELLO'
```

## Your Task

Create a file called `exercises.js` with solutions to the following exercises. Each exercise should `console.log()` its result.

### Exercise 1: Variables and Types

```js
// Declare these variables with appropriate types:
// - Your name (string)
// - Your age (number)
// - Whether you like pizza (boolean)
// - A list of 5 favorite movies (array)
// - An object describing your pet (or dream pet) with name, type, and age

// Print each variable and its type using typeof
// Example output: "Name: John, Type: string"
```

### Exercise 2: String Operations

```js
// Given this string:
const sentence = "the quick brown fox jumps over the lazy dog";

// Do the following and print each result:
// 1. Convert to UPPERCASE
// 2. Count the number of characters
// 3. Replace "lazy" with "energetic"
// 4. Check if it includes the word "cat"
// 5. Split into an array of words
// 6. Get the first 3 characters
```

### Exercise 3: Array Operations

```js
// Given this array:
const numbers = [5, 3, 8, 1, 9, 2, 7, 4, 6];

// Do the following and print each result:
// 1. Sort the array from smallest to largest
// 2. Find the largest number
// 3. Find the smallest number
// 4. Calculate the sum of all numbers
// 5. Filter only numbers greater than 5
// 6. Double every number (multiply by 2)
// 7. Check if the array includes the number 7
```

### Exercise 4: Functions

```js
// Create these functions and test each one:

// 1. greet(name) - returns "Hello, [name]! Welcome!"
// 2. add(a, b) - returns the sum
// 3. isEven(num) - returns true if even, false if odd
// 4. getGrade(score) - returns letter grade:
//    90-100: "A", 80-89: "B", 70-79: "C", 60-69: "D", below 60: "F"
// 5. reverseString(str) - returns the string reversed
// 6. findLongest(words) - takes array of strings, returns the longest one
```

### Exercise 5: Loops

```js
// 1. Print numbers 1 to 20
// 2. Print only even numbers from 1 to 20
// 3. FizzBuzz: For numbers 1-30, print:
//    - "Fizz" if divisible by 3
//    - "Buzz" if divisible by 5
//    - "FizzBuzz" if divisible by both 3 and 5
//    - The number itself otherwise
// 4. Print a multiplication table for 7 (7x1=7, 7x2=14, ... 7x10=70)
```

### Exercise 6: Objects

```js
// Create a "student" object with:
// - name, age, grades (array of numbers), isEnrolled (boolean)
//
// Then:
// 1. Print the student's name
// 2. Add a new grade to the grades array
// 3. Calculate the average grade
// 4. Create a function getStudentInfo(student) that returns a formatted string
// 5. Create a second student object and put both in an array
// 6. Write a function that finds the student with the higher average
```

## Step-by-Step Guide

1. Make sure Node.js is installed: run `node --version` in terminal
   - If not installed, ask Claude: "How do I install Node.js on Mac?"
2. Create `exercises.js` in this folder
3. Work through exercises one at a time
4. After each exercise, run `node exercises.js` to see the output
5. Add a separator between exercises for readability:
   ```js
   console.log("\n--- Exercise 1: Variables ---");
   ```

## Acceptance Criteria

- [ ] All 6 exercises are completed in `exercises.js`
- [ ] File runs without errors: `node exercises.js`
- [ ] Uses `let` and `const` appropriately (no `var`)
- [ ] Functions use proper parameters and return values
- [ ] FizzBuzz output is correct
- [ ] Array operations produce correct results
- [ ] Output is labeled and readable

## Key Concepts Reference

```js
// Variables
const name = "John";     // Can't be reassigned
let age = 25;            // Can be reassigned
age = 26;                // OK

// Functions
function add(a, b) {
    return a + b;
}
const result = add(3, 4); // 7

// Arrow function (shorter syntax)
const multiply = (a, b) => a * b;

// Array methods
const nums = [1, 2, 3];
nums.push(4);              // Add to end
nums.filter(n => n > 2);   // [3, 4]
nums.map(n => n * 2);      // [2, 4, 6, 8]
nums.reduce((sum, n) => sum + n, 0); // 10

// If/else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## Bonus Challenges

- Rewrite Exercise 4 functions using arrow functions (`=>`)
- Create a simple number guessing game (generate random number, check guesses in a loop)
- Use `Array.reduce()` for the sum calculation in Exercise 3
- Create a function that counts the vowels in a string
- Create a function that checks if a string is a palindrome

## Using Claude Code

- **"What's the difference between let and const?"** - Ask Claude: `"When should I use let vs const in JavaScript? Give examples of each."`
- **"I don't understand callbacks"** - Ask Claude: `"Explain JavaScript array.filter() and array.map() with simple examples"`
- **"My function returns undefined"** - Ask Claude: `"My function returns undefined instead of the value. Here's my code: [paste]. Why?"`
- **"What's wrong with my loop?"** - Ask Claude: `"My for loop runs forever / doesn't print what I expect. Here's the code: [paste]"`
- **Debugging tip:** Use `console.log()` liberally to see what your variables contain at each step
