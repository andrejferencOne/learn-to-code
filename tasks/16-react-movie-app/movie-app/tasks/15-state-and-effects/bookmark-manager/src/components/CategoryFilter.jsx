 const CATEGORIES = ["all", "personal", "work", "learning", "entertainment"];

  function CategoryFilter({ active, onChange }) {
      return (
          <div className="category-filter">
              {CATEGORIES.map(cat => (
                  <button
                      key={cat}
                      className={active === cat ? "active" : ""}
                      onClick={() => onChange(cat)}
                  >
                      {cat}
                  </button>
              ))}
          </div>
      );
  }

  export default CategoryFilter;
