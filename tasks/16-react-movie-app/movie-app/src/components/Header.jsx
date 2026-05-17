function Header({ view, onViewChange, favoritesCount }) {
    return (
      <header className="header">
        <h1>🎬 Movie App</h1>
        <nav>
          <button
            className={view === "home" ? "active" : ""}
            onClick={() => onViewChange("home")}
          >
            Home
          </button>
          <button
            className={view === "favorites" ? "active" : ""}
            onClick={() => onViewChange("favorites")}
          >
            ❤️  Favorites ({favoritesCount})
          </button>
        </nav>
      </header>
    );
  }

  export default Header;
