# Task 12: API & Fetch

**Difficulty:** ★★★☆☆ (Intermediate)
**Module:** Building Real Apps
**Time estimate:** 2-3 hours

## What You'll Learn

- What APIs are and how they work
- HTTP methods (GET, POST)
- `fetch()` API
- Async/await syntax
- Handling loading states and errors
- Working with JSON data

## Background

An **API** (Application Programming Interface) lets your code talk to other services on the internet. When you use a weather app, it doesn't measure the weather itself - it asks a weather API for the data.

### How APIs Work

```
Your App                    API Server
┌──────┐    Request        ┌──────────┐
│      │ ── GET /users ──> │          │
│      │                   │          │
│      │ <── JSON data ──  │          │
└──────┘    Response       └──────────┘
```

### Fetch API

```js
// Basic fetch
const response = await fetch("https://api.example.com/data");
const data = await response.json();

// With error handling
try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error("Failed to fetch:", error);
}
```

### Async/Await

JavaScript is **asynchronous** - fetch requests take time, and JS doesn't want to freeze the page while waiting. `async/await` makes this easy to handle:

```js
// This function talks to the internet, so it needs 'async'
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();  // 'await' waits for the data
    return users;
}
```

## Your Task

Build a **User Directory** page that fetches data from a free public API and displays it beautifully.

### API to Use

**JSONPlaceholder** - a free fake API for testing:
- Users: `https://jsonplaceholder.typicode.com/users`
- Posts: `https://jsonplaceholder.typicode.com/posts`
- User's posts: `https://jsonplaceholder.typicode.com/posts?userId=1`

### Requirements

1. **User List Page**
   - Fetch all users from the API on page load
   - Display each user as a card with: name, email, company, city
   - Show a loading spinner/message while fetching
   - Show an error message if the fetch fails

2. **Search / Filter**
   - Search bar to filter users by name (client-side filtering)
   - Filter instantly as you type

3. **User Detail**
   - Clicking a user card shows their details in a modal or expanded section
   - Fetch and display that user's posts
   - Show post title and body

4. **Loading & Error States**
   - Loading spinner while data is being fetched
   - Error message with "Retry" button if fetch fails
   - Empty state if no users match the search

### UI Layout

```
┌─────────────────────────────────────────┐
│  User Directory                         │
│  ┌───────────────────────────────────┐  │
│  │ 🔍 Search users...               │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │ John Doe │ │ Jane Doe │ │ Bob Jr   ││
│  │ john@... │ │ jane@... │ │ bob@...  ││
│  │ Company  │ │ Company  │ │ Company  ││
│  │ City     │ │ City     │ │ City     ││
│  └──────────┘ └──────────┘ └──────────┘│
│                                         │
│  [Showing 3 of 10 users]               │
└─────────────────────────────────────────┘
```

## Step-by-Step Guide

1. Create `index.html`, `styles.css`, and `app.js`
2. Build HTML structure with a loading state
3. Write the fetch function:
   ```js
   async function fetchUsers() {
       showLoading();
       try {
           const response = await fetch("https://jsonplaceholder.typicode.com/users");
           if (!response.ok) throw new Error("Failed to fetch");
           const users = await response.json();
           displayUsers(users);
       } catch (error) {
           showError(error.message);
       }
   }
   ```
4. Create a `displayUsers(users)` function that creates cards
5. Add the search filter
6. Add click handler for user details
7. Add the posts fetch for individual users
8. Style everything nicely

### Testing Error States

To test your error handling, temporarily change the URL to something wrong:
```js
// This will trigger your error handler
fetch("https://jsonplaceholder.typicode.com/WRONG-URL")
```

## Acceptance Criteria

- [ ] Fetches users from JSONPlaceholder API on page load
- [ ] Displays user cards with name, email, company, city
- [ ] Shows a loading state while fetching
- [ ] Shows an error message with retry button if fetch fails
- [ ] Search bar filters users by name in real-time
- [ ] Clicking a user shows their posts (fetched from API)
- [ ] Uses async/await (not `.then()` chains)
- [ ] Has proper error handling with try/catch
- [ ] No unhandled promise rejections in console
- [ ] Looks clean and professional

## Bonus Challenges

- Add pagination (show 5 users per page, with Next/Previous buttons)
- Add "Sort by" dropdown (name, company, city)
- Cache fetched data so you don't re-fetch when going back
- Fetch user's albums and photos (the API has these too)
- Add a "Refresh" button that re-fetches with a cool animation
- Try another API: [PokéAPI](https://pokeapi.co/) or [REST Countries](https://restcountries.com/)

## Free Public APIs to Explore

| API | URL | What It Does |
|-----|-----|-------------|
| JSONPlaceholder | jsonplaceholder.typicode.com | Fake data for testing |
| PokéAPI | pokeapi.co | Pokemon data |
| REST Countries | restcountries.com | Country information |
| Open Trivia DB | opentdb.com/api.php | Quiz questions |
| Dog CEO | dog.ceo/dog-api | Random dog images |

## Using Claude Code

- **"What is async/await?"** - Ask Claude: `"Explain async/await in JavaScript like I'm a beginner. Why can't I just use fetch() without await?"`
- **"My fetch returns a Promise"** - Ask Claude: `"When I console.log my fetch result, it says 'Promise {<pending>}'. What am I doing wrong?"`
- **"CORS error"** - Ask Claude: `"I'm getting a CORS error when fetching from an API. What does this mean and how do I fix it?"`
- **"How do I show loading state?"** - Ask Claude: `"What's the best pattern for showing loading/error/success states when fetching data in vanilla JavaScript?"`
- **"How do I filter as I type?"** - Ask Claude: `"How do I add a search input that filters a list of items in real-time as the user types?"`
