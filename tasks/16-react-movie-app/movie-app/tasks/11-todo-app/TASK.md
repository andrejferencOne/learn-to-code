# Task 11: Todo App

**Difficulty:** ★★★☆☆ (Intermediate)
**Module:** Building Real Apps
**Time estimate:** 3-4 hours

## What You'll Learn

- Building a complete CRUD application (Create, Read, Update, Delete)
- Data persistence with `localStorage`
- Event delegation
- Working with unique IDs
- Filtering and sorting data
- Structuring a larger JavaScript application

## Background

The "todo app" is the classic first real application for every developer - like "Hello World" but for real apps. You'll practice all your HTML, CSS, and JavaScript skills together.

### CRUD Operations

Every app that manages data does these four things:

| Operation | In a Todo App |
|-----------|--------------|
| **C**reate | Add a new todo |
| **R**ead | Display all todos |
| **U**pdate | Mark todo as complete, edit text |
| **D**elete | Remove a todo |

### localStorage

`localStorage` lets you save data in the browser that persists even after closing the tab:

```js
// Save data
localStorage.setItem("todos", JSON.stringify(myTodos));

// Load data
const saved = localStorage.getItem("todos");
const myTodos = saved ? JSON.parse(saved) : [];
```

## Your Task

Build a fully functional todo application.

### Core Features

1. **Add todos** - input field + "Add" button (also works with Enter key)
2. **Display todos** - list of all todos
3. **Complete todos** - checkbox to mark as done (strikethrough text)
4. **Delete todos** - remove button on each todo
5. **Edit todos** - double-click to edit a todo's text
6. **Persist data** - save to `localStorage`, load on page open
7. **Filter** - buttons to show All / Active / Completed
8. **Counter** - "3 items left" counter for active todos
9. **Clear completed** - button to remove all completed todos

### Data Structure

Each todo should be an object:
```js
{
    id: 1683456789,          // unique ID (use Date.now())
    text: "Learn JavaScript",
    completed: false,
    createdAt: "2024-01-15"
}
```

### UI Layout

```
┌────────────────────────────────────────┐
│           ✓ Todo App                   │
│                                        │
│  ┌──────────────────────────┐ ┌─────┐  │
│  │ What needs to be done?   │ │ Add │  │
│  └──────────────────────────┘ └─────┘  │
│                                        │
│  ┌────────────────────────────────────┐│
│  │ □ Buy groceries              [x]  ││
│  │ ■ Learn HTML (strikethrough) [x]  ││
│  │ □ Build a website            [x]  ││
│  │ □ Practice Git               [x]  ││
│  └────────────────────────────────────┘│
│                                        │
│  2 items left                          │
│  [All] [Active] [Completed] [Clear ✓]  │
└────────────────────────────────────────┘
```

## Step-by-Step Guide

1. Create `index.html`, `styles.css`, and `app.js`
2. Build the HTML structure
3. Style it nicely (take inspiration from [TodoMVC](https://todomvc.com/))
4. Implement in this order:
   1. **Render function** - a function that takes the todos array and displays them
   2. **Add todo** - push to array, re-render
   3. **Delete todo** - filter from array, re-render
   4. **Toggle complete** - update completed property, re-render
   5. **Save to localStorage** - call after every change
   6. **Load from localStorage** - call on page load
   7. **Filter buttons** - show/hide based on completed status
   8. **Edit on double-click** - replace text with input field
   9. **Counter and Clear completed**

### Key Pattern: Single Render Function

Instead of manually updating the DOM in many places, use one function that re-renders everything:

```js
let todos = [];

function render() {
    const list = document.querySelector("#todo-list");
    list.innerHTML = "";

    const filtered = getFilteredTodos();
    filtered.forEach(todo => {
        const li = document.createElement("li");
        // ... build the todo item
        list.appendChild(li);
    });

    updateCounter();
    saveTodos();
}

// Call render() after every change
```

## Acceptance Criteria

- [ ] Can add new todos (input + button, Enter key works too)
- [ ] Can mark todos as complete (checkbox, visual strikethrough)
- [ ] Can delete individual todos
- [ ] Can edit a todo by double-clicking
- [ ] Todos persist in localStorage (refresh the page - data is still there)
- [ ] Filter buttons work (All / Active / Completed)
- [ ] Item counter shows correct count of active todos
- [ ] "Clear completed" removes all completed todos
- [ ] Empty input is not added as a todo
- [ ] App looks polished and usable
- [ ] No JavaScript errors in console

## Bonus Challenges

- Add drag-and-drop reordering
- Add due dates to todos
- Add priority levels (high, medium, low) with color coding
- Add categories/tags to todos
- Add a search/filter by text feature
- Add "undo delete" with a 5-second window
- Add keyboard shortcuts (e.g., Ctrl+Enter to add)
- Add a "Mark all complete" checkbox at the top

## Using Claude Code

- **"How does localStorage work?"** - Ask Claude: `"Show me how to save and load an array of objects to localStorage in JavaScript"`
- **"My todos disappear on refresh"** - Ask Claude: `"I'm saving todos to localStorage but they're gone after refresh. Here's my save/load code: [paste]"`
- **"How do I handle the edit feature?"** - Ask Claude: `"How do I replace a list item with an input field on double-click, then save the change on Enter or blur?"`
- **"Event delegation?"** - Ask Claude: `"My delete buttons don't work on dynamically created elements. What is event delegation and how do I use it?"`
- **"How do I generate unique IDs?"** - Ask Claude: `"What's the best way to create unique IDs for items in a JavaScript array?"`
