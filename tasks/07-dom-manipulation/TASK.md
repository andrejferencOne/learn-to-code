# Task 07: DOM Manipulation

**Difficulty:** ★★★☆☆ (Intermediate)
**Module:** JavaScript Foundations
**Time estimate:** 2-3 hours
**Builds on:** [Task 06](../06-javascript-basics/TASK.md)

## What You'll Learn

- What the DOM is (Document Object Model)
- Selecting elements with `querySelector` and `querySelectorAll`
- Changing content, styles, and attributes with JavaScript
- Handling events (clicks, input, keyboard)
- Creating and removing elements dynamically
- The connection between HTML and JavaScript

## Background

The **DOM** is how JavaScript sees your HTML page. When a browser loads HTML, it creates a tree structure in memory - this tree is the DOM. JavaScript can read and change this tree, which updates what you see on screen.

```
document
  └── html
       ├── head
       │    └── title
       └── body
            ├── h1
            ├── p
            └── div
                 ├── button
                 └── ul
                      ├── li
                      └── li
```

### Key Methods

```js
// Finding elements
document.querySelector(".myClass")      // First element with class
document.querySelector("#myId")         // Element with ID
document.querySelectorAll("p")          // ALL <p> elements (returns a list)

// Changing content
element.textContent = "New text";       // Change text
element.innerHTML = "<strong>Bold</strong>"; // Change HTML

// Changing styles
element.style.color = "red";
element.style.backgroundColor = "blue";
element.classList.add("active");        // Add a CSS class
element.classList.remove("active");     // Remove a CSS class
element.classList.toggle("active");     // Toggle a CSS class

// Events
element.addEventListener("click", function() {
    console.log("Clicked!");
});
```

## Your Task

Create an **interactive color palette generator** with the following features:

### Requirements

1. **Generate Colors Button**
   - Clicking generates 5 random color swatches
   - Each swatch shows the hex color code (e.g., `#a3f2c1`)
   - Swatches are displayed as colored boxes

2. **Click to Copy**
   - Clicking a color swatch copies the hex code to a "Selected Colors" list below
   - Show a brief "Copied!" message when clicked

3. **Selected Colors List**
   - Shows all colors the user has selected
   - Each item shows the color box + hex code
   - Has a "Remove" button to delete individual colors
   - Has a "Clear All" button

4. **Theme Toggle**
   - A button that toggles the page between light and dark mode
   - Should toggle a CSS class on the `<body>` element

5. **Counter**
   - Show a count of how many colors have been generated in total

### Page Layout

```
┌─────────────────────────────────────┐
│  Color Palette Generator    [Dark]  │
│                                     │
│  [Generate New Colors]              │
│  Total generated: 15                │
│                                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐│
│  │    │ │    │ │    │ │    │ │    ││
│  │    │ │    │ │    │ │    │ │    ││
│  └────┘ └────┘ └────┘ └────┘ └────┘│
│  #a3f2  #ff12  #3498  #e74c  #2ecc │
│                                     │
│  Selected Colors:    [Clear All]    │
│  ■ #a3f2c1  [Remove]               │
│  ■ #3498db  [Remove]               │
└─────────────────────────────────────┘
```

## Step-by-Step Guide

1. Create `index.html`, `styles.css`, and `script.js`
2. Link the CSS and JS to your HTML:
   ```html
   <link rel="stylesheet" href="styles.css">
   <script src="script.js" defer></script>
   ```
   (The `defer` attribute makes the script run after HTML is loaded)
3. Build the HTML structure first (static, no functionality)
4. Style it with CSS
5. Add JavaScript functionality one feature at a time:
   - First: generate random colors on button click
   - Then: click-to-copy to selected list
   - Then: remove buttons
   - Then: theme toggle
   - Then: counter

### Helper: Generate Random Color

```js
function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, "0");
}
```

### Helper: Create an Element

```js
// Create a new element and add it to the page
const newItem = document.createElement("div");
newItem.textContent = "Hello!";
newItem.classList.add("color-item");
document.querySelector("#color-list").appendChild(newItem);
```

## Acceptance Criteria

- [ ] "Generate" button creates 5 random colored boxes
- [ ] Each box shows its hex code
- [ ] Clicking a box adds the color to the selected list
- [ ] Each selected color has a working "Remove" button
- [ ] "Clear All" button empties the selected list
- [ ] Dark/light mode toggle works
- [ ] Counter tracks total generated colors
- [ ] JavaScript is in a separate `.js` file (not inline)
- [ ] No errors in browser console (F12 > Console)

## Bonus Challenges

- Add a "lock" feature - locked colors don't change when regenerating
- Add keyboard shortcut (spacebar) to generate new colors
- Save selected colors to `localStorage` so they persist after page refresh
- Add a "Copy to clipboard" feature using `navigator.clipboard.writeText()`
- Add color format toggle (HEX / RGB / HSL)

## Using Claude Code

- **"How do I select an element?"** - Ask Claude: `"What's the difference between querySelector and getElementById in JavaScript?"`
- **"My event listener doesn't work"** - Ask Claude: `"I added a click event but nothing happens. My button has id='generate' and here's my JS: [paste]"`
- **"How do I add elements dynamically?"** - Ask Claude: `"How do I create a new div with text and a class using JavaScript and add it to the page?"`
- **"My code works for one button but not all"** - Ask Claude: `"I have multiple remove buttons but only the first one works. Here's my code: [paste]"`
- **Important:** When using `querySelectorAll`, remember it returns a **list**, not a single element. You need to loop through it or use `.forEach()`.
