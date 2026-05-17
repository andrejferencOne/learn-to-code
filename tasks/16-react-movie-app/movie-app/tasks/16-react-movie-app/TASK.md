# Task 16: React Movie App

**Difficulty:** ★★★★☆ (Intermediate-Advanced)
**Module:** React
**Time estimate:** 4-6 hours
**Builds on:** [Task 14](../14-react-basics/TASK.md) and [Task 15](../15-state-and-effects/TASK.md)

## What You'll Learn

- Building a complete React application
- API integration in React (useEffect + fetch)
- Multi-page feel with conditional rendering
- Debouncing search input
- Loading skeletons
- Error boundaries
- Custom hooks

## Background

This is the capstone task for the React module. You'll combine everything - components, props, state, effects, API calls, and good UX patterns - into one polished application.

### New Concepts

**Debouncing:** When searching as you type, you don't want to make an API call for every single keystroke. Debouncing waits until the user stops typing for a moment:

```js
// Simple debounce with useEffect
useEffect(() => {
    const timer = setTimeout(() => {
        if (searchTerm) fetchMovies(searchTerm);
    }, 500); // Wait 500ms after last keystroke

    return () => clearTimeout(timer); // Cancel if user keeps typing
}, [searchTerm]);
```

**Custom Hooks:** Extract reusable logic into functions:

```js
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
```

## Your Task

Build a **Movie Search Application** using The Movie Database (TMDB) API.

### Getting the API Key

1. Go to [themoviedb.org](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings > API > Request an API Key
4. Choose "Developer" and fill in the form
5. Copy your API key (v3 auth)

**Store it in a `.env` file** (Vite uses `VITE_` prefix):
```
VITE_TMDB_API_KEY=your-api-key-here
```

Access in code: `import.meta.env.VITE_TMDB_API_KEY`

Add `.env` to `.gitignore`!

### API Endpoints

```
Base URL: https://api.themoviedb.org/3

Popular movies:
GET /movie/popular?api_key={key}&page=1

Search movies:
GET /search/movie?api_key={key}&query={search}

Movie details:
GET /movie/{id}?api_key={key}

Movie images:
https://image.tmdb.org/t/p/w500{poster_path}
```

### Features

1. **Home Page**
   - Show popular/trending movies on first load
   - Movie grid with poster, title, rating, year
   - Responsive grid layout

2. **Search**
   - Search input in the header
   - Debounced search (waits 500ms after typing stops)
   - Shows search results replacing the home content
   - "Clear search" button to go back to popular

3. **Movie Detail View**
   - Clicking a movie card shows detailed info
   - Backdrop image, poster, title, year, rating
   - Overview/description
   - Genres
   - Runtime
   - "Back to results" button

4. **Favorites**
   - Heart/star icon on each movie to add to favorites
   - Favorites list accessible from the header
   - Saved in localStorage
   - Toggle between home and favorites view

5. **Loading & Error States**
   - Loading skeleton cards while fetching
   - Error message with retry button
   - "No results found" state

### Component Structure

```
App
├── Header
│   ├── Logo
│   ├── SearchInput
│   └── Navigation (Home | Favorites)
├── HomePage
│   └── MovieGrid
│       └── MovieCard (multiple)
├── MovieDetail
│   └── BackButton
├── FavoritesPage
│   └── MovieGrid
│       └── MovieCard (multiple)
└── LoadingSkeleton / ErrorMessage
```

### Views (Conditional Rendering)

Instead of a router (you'll learn that in Next.js), use state to switch views:

```jsx
function App() {
    const [view, setView] = useState("home");      // "home" | "detail" | "favorites"
    const [selectedMovie, setSelectedMovie] = useState(null);

    function showDetail(movie) {
        setSelectedMovie(movie);
        setView("detail");
    }

    return (
        <div>
            <Header
                onHomeClick={() => setView("home")}
                onFavClick={() => setView("favorites")}
            />
            {view === "home" && <HomePage onMovieClick={showDetail} />}
            {view === "detail" && <MovieDetail movie={selectedMovie} onBack={() => setView("home")} />}
            {view === "favorites" && <FavoritesPage onMovieClick={showDetail} />}
        </div>
    );
}
```

## Step-by-Step Guide

1. Create the project:
   ```bash
   npm create vite@latest movie-app -- --template react
   cd movie-app
   npm install
   ```
2. Set up `.env` with your TMDB API key
3. Create the component folder structure
4. Build the Header component first
5. Create a MovieCard component
6. Build the HomePage with popular movies fetch
7. Add search functionality with debouncing
8. Build the MovieDetail view
9. Add favorites with localStorage
10. Add loading and error states
11. Polish the styling

## Acceptance Criteria

- [ ] Shows popular movies on first load
- [ ] Movie cards display poster, title, rating, and year
- [ ] Search works with debouncing (no call on every keystroke)
- [ ] Clicking a movie shows detailed view with more info
- [ ] Can go back from detail to list
- [ ] Can add/remove movies from favorites
- [ ] Favorites persist in localStorage
- [ ] Can view favorites list
- [ ] Loading state while fetching data
- [ ] Error state with retry button
- [ ] "No results" state for empty searches
- [ ] API key is in `.env` and `.gitignore`
- [ ] Responsive grid layout
- [ ] No console errors or warnings

## Bonus Challenges

- Add pagination (load more movies on scroll or "Load More" button)
- Add movie genre filtering
- Add sorting (rating, year, alphabetical)
- Create a custom `useFetch` hook for all API calls
- Add a movie trailer (TMDB has a videos endpoint)
- Add skeleton loading cards (gray placeholder cards while loading)
- Add CSS transitions when switching between views
- Implement infinite scroll instead of pagination

## Using Claude Code

- **"How do I use environment variables in Vite?"** - Ask Claude: `"How do I set up and use environment variables in a Vite React project? I need to store an API key."`
- **"Debouncing doesn't work"** - Ask Claude: `"I'm trying to debounce my search input in React but it fires on every keystroke. Here's my useEffect: [paste]"`
- **"State doesn't update between views"** - Ask Claude: `"When I go back from detail to home, my search results are gone. How do I preserve state between view changes?"`
- **"How do I make skeleton loaders?"** - Ask Claude: `"Show me how to create a simple loading skeleton card in React with CSS animation"`
- **"My favorites disappear"** - Ask Claude: `"I'm saving favorites to localStorage in useEffect but they disappear on refresh. Here's my code: [paste]"`
