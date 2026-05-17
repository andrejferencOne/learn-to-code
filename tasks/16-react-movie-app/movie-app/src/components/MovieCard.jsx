const IMG_BASE = "https://image.tmdb.org/t/p/w500";

  function MovieCard({ movie, onFavorite, isFavorite }) {
    return (
      <div className="movie-card">
        <img
          src={movie.poster_path ? IMG_BASE + movie.poster_path : "/no-image.png"}
          alt={movie.title}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <div className="card-footer">
            <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
            <button
              className={`fav-btn ${isFavorite ? "active" : ""}`}
              onClick={() => onFavorite(movie)}
            >
              {isFavorite ? "❤️ " : "🤍"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default MovieCard;
