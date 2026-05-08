# Task 08: Interactive Quiz

**Difficulty:** ★★★☆☆ (Intermediate)
**Module:** JavaScript Foundations
**Time estimate:** 2-3 hours
**Builds on:** [Task 06](../06-javascript-basics/TASK.md) and [Task 07](../07-dom-manipulation/TASK.md)

## What You'll Learn

- Combining HTML, CSS, and JavaScript into a complete application
- Managing application state (tracking score, current question, etc.)
- Working with arrays of objects
- Timer functionality with `setInterval` and `clearInterval`
- Conditional rendering (showing different screens based on state)

## Background

This is your first "real" mini-application. You'll combine everything from the previous tasks to build something that feels like an actual app. The key concept here is **application state** - variables that track what's happening in your app at any moment.

```js
// Example of application state
let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let isGameOver = false;
```

Every time the state changes, you update the DOM to reflect the new state. This is the fundamental pattern behind all interactive web apps.

## Your Task

Build a **timed quiz game** with the following screens and features:

### Screen 1: Start Screen
- Quiz title
- Brief instructions
- Category/topic display
- "Start Quiz" button

### Screen 2: Question Screen
- Question number (e.g., "Question 3 of 10")
- The question text
- 4 answer buttons
- A countdown timer (30 seconds per question)
- Current score display
- Progress bar showing how far through the quiz you are

### Screen 3: Results Screen
- Final score (e.g., "7 out of 10")
- Percentage
- A message based on score (e.g., "Excellent!", "Good job!", "Keep practicing!")
- List of questions with your answers vs correct answers
- "Play Again" button

### Question Data

Create at least 10 questions. Pick any topic you like! Here's the data structure:

```js
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink Text Management Language"
        ],
        correct: 0  // Index of correct answer
    },
    {
        question: "Which CSS property changes text color?",
        answers: ["font-color", "text-color", "color", "foreground-color"],
        correct: 2
    },
    // ... more questions
];
```

### Timer Requirements
- Each question has 30 seconds
- Timer counts down visually
- If time runs out, the question is marked wrong and the quiz moves on
- Timer resets for each new question

### Feedback
- When an answer is selected:
  - Correct: button turns green briefly
  - Wrong: selected button turns red, correct answer turns green
  - Wait 1.5 seconds, then show the next question

## Step-by-Step Guide

1. Create `index.html`, `styles.css`, and `script.js`
2. Design the HTML with all three screens (hide two with CSS initially)
3. Style everything to look like a real quiz app
4. Implement in this order:
   1. Display the first question from your data array
   2. Handle answer selection (check if correct)
   3. Move to the next question
   4. Show results at the end
   5. Add the timer
   6. Add the progress bar
   7. Add the "Play Again" feature (reset all state)

### Key Patterns

**Showing/hiding screens:**
```js
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.querySelector(`#${screenId}`).classList.remove("hidden");
}
```

**Timer:**
```js
let timer;
function startTimer() {
    timeLeft = 30;
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}
```

## Acceptance Criteria

- [ ] Has 3 distinct screens: Start, Question, Results
- [ ] Has at least 10 questions with 4 answers each
- [ ] Only one screen is visible at a time
- [ ] Clicking an answer shows if it's correct/wrong (color feedback)
- [ ] Score is tracked and displayed
- [ ] Timer counts down from 30 seconds per question
- [ ] Time running out marks the question as wrong
- [ ] Progress indicator shows current question number
- [ ] Results screen shows final score and percentage
- [ ] "Play Again" resets everything and starts fresh
- [ ] No JavaScript errors in the browser console

## Bonus Challenges

- Shuffle the question order each time the quiz starts
- Shuffle the answer order for each question
- Add difficulty levels (easy: 45s, medium: 30s, hard: 15s)
- Add sound effects for correct/wrong answers (using `new Audio()`)
- Store high scores in `localStorage`
- Add a "50/50" lifeline that removes 2 wrong answers
- Add an animated progress bar
- Let the user choose from multiple quiz categories

## Using Claude Code

- **"How do I show one screen and hide others?"** - Ask Claude: `"I have 3 divs and I want to show only one at a time. What's the best pattern for this in vanilla JS?"`
- **"My timer doesn't stop"** - Ask Claude: `"I'm using setInterval for a countdown timer but it keeps running after the quiz ends. How do I properly clean it up?"`
- **"How do I wait before showing the next question?"** - Ask Claude: `"How do I add a 1.5 second delay before running a function in JavaScript?"`
- **"My score resets wrong"** - Ask Claude: `"When I click 'Play Again', some of my variables don't reset properly. How should I structure my reset function?"`
- **Debugging strategy:** Add `console.log` to your click handlers and timer to make sure they fire correctly. Check the Console tab (F12) for errors.
