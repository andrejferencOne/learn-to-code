# Task 15: State & Effects

**Difficulty:** ★★★★☆ (Intermediate-Advanced)
**Module:** React
**Time estimate:** 3-4 hours
**Builds on:** [Task 14](../14-react-basics/TASK.md)

## What You'll Learn

- `useState` - managing component data that changes
- `useEffect` - running code when things change
- Controlled forms in React
- Conditional rendering
- Lifting state up (sharing state between components)
- React's re-rendering model

## Background

In Task 14, your components were **static** - they displayed data but couldn't change. Now you'll learn **state** - data that your components can read AND modify, causing them to re-render.

### useState

```jsx
import { useState } from "react";

function Counter() {
    // count = the value, setCount = function to update it
    const [count, setCount] = useState(0); // 0 is the initial value

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
```

**Key rule:** Never modify state directly! Always use the setter function:
```js
// WRONG
count = count + 1;

// RIGHT
setCount(count + 1);
```

### useEffect

Runs code when a component mounts or when certain values change:

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // This runs when userId changes
        fetch(`/api/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userId]); // dependency array - when to re-run

    if (!user) return <p>Loading...</p>;
    return <h1>{user.name}</h1>;
}
```

### Re-rendering

When state changes, React re-renders the component (calls the function again). This is how the UI stays in sync with your data:

```
State changes → Component re-renders → DOM updates → User sees new UI
```

## Your Task

Build a **Bookmark Manager** - an app to save, organize, and search bookmarks.

### Setup

Create a new Vite project or continue in the same project from Task 14:
```bash
npm create vite@latest bookmark-manager -- --template react
cd bookmark-manager
npm install
npm run dev
```

### Features

1. **Add Bookmark Form**
   - Input fields: URL, Title, Category (dropdown), Notes (optional)
   - Form validation: URL and Title are required
   - Clear form after successful add
   - Controlled inputs (state manages form values)

2. **Bookmark List**
   - Display all bookmarks as cards
   - Show title, URL (clickable), category badge, and notes
   - Delete button on each bookmark
   - Edit button (switches card to edit mode)

3. **Search & Filter**
   - Search bar that filters bookmarks by title or URL
   - Category filter buttons (All, Work, Personal, Learning, Entertainment, etc.)
   - Show count of matching bookmarks

4. **Categories**
   - Predefined categories with colors
   - Category tabs/buttons for filtering

5. **Persistence**
   - Save bookmarks to localStorage using useEffect
   - Load from localStorage on mount

### Component Structure

```
App
├── Header
├── AddBookmarkForm
├── SearchBar
├── CategoryFilter
├── BookmarkList
│   └── BookmarkCard (multiple)
└── Footer
```

### State Design

Think about what state you need and where it should live:

```jsx
// App.jsx - this state is shared by multiple components
function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Filtered bookmarks (derived state - computed, not stored)
    const filteredBookmarks = bookmarks
        .filter(b => activeCategory === "all" || b.category === activeCategory)
        .filter(b =>
            b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.url.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // Save to localStorage whenever bookmarks change
    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);

    // Load from localStorage on first render
    useEffect(() => {
        const saved = localStorage.getItem("bookmarks");
        if (saved) setBookmarks(JSON.parse(saved));
    }, []);

    // CRUD functions
    function addBookmark(bookmark) {
        setBookmarks([...bookmarks, { ...bookmark, id: Date.now() }]);
    }

    function deleteBookmark(id) {
        setBookmarks(bookmarks.filter(b => b.id !== id));
    }

    // Pass state and functions down as props
    return (
        <div>
            <AddBookmarkForm onAdd={addBookmark} />
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
            <BookmarkList
                bookmarks={filteredBookmarks}
                onDelete={deleteBookmark}
            />
        </div>
    );
}
```

### Controlled Form Example

```jsx
function AddBookmarkForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("personal");

    function handleSubmit(e) {
        e.preventDefault(); // Prevent page reload
        if (!title || !url) return;
        onAdd({ title, url, category });
        setTitle("");
        setUrl("");
        setCategory("personal");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            {/* more inputs... */}
            <button type="submit">Add Bookmark</button>
        </form>
    );
}
```

## Acceptance Criteria

- [ ] Can add new bookmarks with title, URL, category, and notes
- [ ] Form validates required fields (title and URL)
- [ ] Form clears after successful add
- [ ] Bookmarks display as cards with all info
- [ ] Can delete bookmarks
- [ ] Search filters bookmarks by title or URL in real-time
- [ ] Category filter shows only bookmarks of selected category
- [ ] Shows count of displayed bookmarks
- [ ] Data persists in localStorage (survives page refresh)
- [ ] Uses useState for all interactive state
- [ ] Uses useEffect for localStorage sync
- [ ] All inputs are controlled (value + onChange)
- [ ] No errors or warnings in console

## Bonus Challenges

- Add edit functionality (inline editing of bookmarks)
- Add drag-and-drop reordering
- Add "favorite" toggle with a star icon
- Add sorting (by date added, alphabetical, category)
- Add bulk actions (select multiple, delete selected)
- Add import/export bookmarks as JSON
- Add a confirmation dialog before deleting
- Count bookmarks per category and show in the filter buttons

## Using Claude Code

- **"useState confusion"** - Ask Claude: `"I update my state with setState but the value doesn't change immediately when I console.log it right after. Why?"`
- **"useEffect runs twice"** - Ask Claude: `"My useEffect runs twice on mount in development. Is this a bug? How do I handle it?"`
- **"How do I share state between components?"** - Ask Claude: `"Two sibling components need the same data. Where should I put the state? Explain 'lifting state up' in React"`
- **"Controlled vs uncontrolled inputs"** - Ask Claude: `"What's a controlled input in React? Why should I use value and onChange instead of just reading the input value?"`
- **"My filter doesn't work"** - Ask Claude: `"I'm filtering an array in React but the list doesn't update. Here's my code: [paste]"`
