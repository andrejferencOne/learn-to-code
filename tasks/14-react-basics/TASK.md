# Task 14: React Basics

**Difficulty:** ★★★☆☆ (Intermediate)
**Module:** React
**Time estimate:** 3-4 hours

## What You'll Learn

- What React is and why developers use it
- Setting up a React project with Vite
- JSX - HTML-like syntax in JavaScript
- Components - building blocks of React
- Props - passing data to components
- Project structure and file organization

## Background

**React** is a JavaScript library for building user interfaces. Instead of manually updating the DOM (like you did in Tasks 07-08), React does it for you. You describe *what* the UI should look like, and React figures out *how* to update it.

### Why React?

In vanilla JavaScript, you had to:
```js
// Vanilla JS - YOU manage the DOM
const element = document.createElement("div");
element.textContent = "Hello";
element.className = "greeting";
document.body.appendChild(element);
```

In React, you describe the result:
```jsx
// React - describe what you want, React handles the DOM
function Greeting() {
    return <div className="greeting">Hello</div>;
}
```

### Key Concepts

| Concept | What It Means |
|---------|--------------|
| Component | A reusable piece of UI (like a function that returns HTML) |
| JSX | HTML-like syntax that React uses (it's actually JavaScript) |
| Props | Data you pass to a component (like function arguments) |
| Rendering | React converting your components into actual DOM elements |

### JSX vs HTML Differences

| HTML | JSX |
|------|-----|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `style="color: red"` | `style={{ color: "red" }}` |
| `onclick="..."` | `onClick={...}` |

## Your Task

Build a **Recipe Card Collection** using React components.

### Setup

1. Make sure Node.js is installed (`node --version`)
2. Create a new React project with Vite:
   ```bash
   npm create vite@latest recipe-cards -- --template react
   cd recipe-cards
   npm install
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser
4. Open the project in your code editor

### Project Structure

```
recipe-cards/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeList.jsx
│   │   ├── Badge.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── recipes.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
└── package.json
```

### Requirements

1. **Create recipe data** (`src/data/recipes.js`):
   ```js
   const recipes = [
       {
           id: 1,
           title: "Spaghetti Carbonara",
           image: "https://placehold.co/400x300",
           time: "30 min",
           difficulty: "Medium",
           servings: 4,
           ingredients: ["spaghetti", "eggs", "parmesan", "pancetta", "black pepper"],
           description: "Classic Italian pasta dish with creamy egg sauce."
       },
       // ... at least 5 more recipes
   ];

   export default recipes;
   ```

2. **Header component** - App title and subtitle

3. **RecipeCard component** - Displays one recipe:
   - Image
   - Title
   - Time, difficulty, and servings as badges
   - Ingredient list
   - Description
   - Should receive all data via **props**

4. **Badge component** - Small reusable label:
   ```jsx
   <Badge text="30 min" icon="⏱️" />
   <Badge text="Medium" icon="📊" />
   ```

5. **RecipeList component** - Maps over recipes array and renders RecipeCards

6. **Footer component** - Simple footer with credit text

### Step-by-Step Implementation

1. Clean up the default Vite template (remove logo, default styles)
2. Create the data file with at least 6 recipes
3. Build components from smallest to largest:
   - `Badge` first (smallest, no dependencies)
   - `RecipeCard` next (uses Badge)
   - `RecipeList` (uses RecipeCard)
   - `Header` and `Footer` (standalone)
4. Assemble everything in `App.jsx`
5. Style with CSS (you can use `App.css` or create separate CSS files)

### Example Component

```jsx
// src/components/Badge.jsx
function Badge({ text, icon }) {
    return (
        <span className="badge">
            {icon && <span className="badge-icon">{icon}</span>}
            {text}
        </span>
    );
}

export default Badge;
```

```jsx
// src/components/RecipeCard.jsx
import Badge from "./Badge";

function RecipeCard({ title, image, time, difficulty, servings, ingredients, description }) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <div className="badges">
                <Badge text={time} icon="⏱️" />
                <Badge text={difficulty} icon="📊" />
                <Badge text={`${servings} servings`} icon="🍽️" />
            </div>
            <p>{description}</p>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeCard;
```

## Acceptance Criteria

- [ ] Project created with Vite and runs without errors
- [ ] Has at least 5 separate components
- [ ] Has at least 6 recipes in the data file
- [ ] RecipeCard receives data via props (not hardcoded)
- [ ] Uses `.map()` to render the list of recipes
- [ ] Each mapped item has a unique `key` prop
- [ ] Components are in separate files in a `components/` folder
- [ ] Uses JSX correctly (`className` not `class`, etc.)
- [ ] App looks good with proper styling
- [ ] No errors or warnings in the browser console

## Bonus Challenges

- Add prop validation using PropTypes
- Create a `Tag` component for ingredients with colored backgrounds
- Add a "Featured" badge that only shows on certain recipes
- Use CSS Modules instead of plain CSS (`RecipeCard.module.css`)
- Add a category filter (e.g., Italian, Mexican, Japanese)
- Make the cards link to a detail view

## Using Claude Code

- **"How do I set up React?"** - Ask Claude: `"Walk me through creating a new React project with Vite step by step"`
- **"What's the difference between props and regular variables?"** - Ask Claude: `"Explain React props like I'm a beginner. Why can't I just use normal variables?"`
- **"My component doesn't render"** - Ask Claude: `"My React component shows nothing on screen. Here's my code: [paste]. What's wrong?"`
- **"How do I map over an array?"** - Ask Claude: `"How do I render a list of items from an array in React? Why do I need a 'key' prop?"`
- **"Import/export confusion"** - Ask Claude: `"Explain the difference between 'export default' and named exports in JavaScript/React"`
- **Pro tip:** The React DevTools browser extension lets you inspect component props and state. Install it from the Chrome Web Store.
