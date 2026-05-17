 import { useState, useEffect } from "react";
  import Header from "./components/Header";
  import SearchBar from "./components/SearchBar";
  import MovieGrid from "./components/MovieGrid";
  import "./App.css";
  
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(() => {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    });
    const [view, setView] = useState("home");

    useEffect(() => {
      if (searchTerm.trim() === "") {
        fetchPopularMovies();
        return;
      }

      const timer = setTimeout(async () => {
        setLoading(true);
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
        );
        const data = await res.json();
        setMovies(data.results);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    async function fetchPopularMovies() {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      const data = await res.json();
      setMovies(data.results);
      setLoading(false);
    }

    function toggleFavorite(movie) {
      setFavorites((prev) =>
        prev.find((m) => m.id === movie.id)
          ? prev.filter((m) => m.id !== movie.id)
          : [...prev, movie]
      );
    }

    return (
      <div className="app">
        <Header view={view} onViewChange={setView} favoritesCount={favorites.length} />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        {loading ? (
          <p className="loading">Loading...</p>
        ) : view === "home" ? (
          <MovieGrid movies={movies} favorites={favorites} onFavorite={toggleFavorite} />
        ) : (
          <MovieGrid movies={favorites} favorites={favorites} onFavorite={toggleFavorite} />
        )}
      </div>
    );
  }

  export default App;
