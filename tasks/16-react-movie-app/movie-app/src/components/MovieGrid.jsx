import MovieCard from "./MovieCard";

  function MovieGrid({ movies, favorites, onFavorite }) {
    if (movies.length === 0) {
      return <p className="no-results">No movies found.</p>;
    }

    return (
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavorite={onFavorite}
            isFavorite={favorites.some((m) => m.id === movie.id)}
          />
        ))}
      </div>
    );
  }

  export default MovieGrid;
