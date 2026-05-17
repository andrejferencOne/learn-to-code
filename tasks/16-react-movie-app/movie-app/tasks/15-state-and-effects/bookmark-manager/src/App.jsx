import { useState, useEffect } from "react";
  import AddBookmarkForm from "./components/AddBookmarkForm";
  import BookmarkCard from "./components/BookmarkCard";
  import SearchBar from "./components/SearchBar";
  import CategoryFilter from "./components/CategoryFilter";
  import "./App.css";                                                                                                                                           

  function App() {
      const [bookmarks, setBookmarks] = useState(() => {
          const saved = localStorage.getItem("bookmarks");
          return saved ? JSON.parse(saved) : [];                                                                                                                
      });

      const [searchTerm, setSearchTerm] = useState("");

      const [activeCategory, setActiveCategory] = useState("all");

    const filteredBookmarks = bookmarks
      .filter(b => activeCategory === "all" || b.category === activeCategory)
      .filter(b =>
          b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.url.toLowerCase().includes(searchTerm.toLowerCase())
      );


      useEffect(() => {
          localStorage.setItem("bookmarks", JSON.stringify(bookmarks));                                                                                         
      }, [bookmarks]);

      function addBookmark(bookmark) {
          setBookmarks([...bookmarks, { ...bookmark, id: Date.now() }]);
      }

      function deleteBookmark(id) {
          setBookmarks(bookmarks.filter(b => b.id !== id));                                                                                                     
      }

      return (
          <div className="app">
              <h1>Bookmark Manager</h1>
              <AddBookmarkForm onAdd={addBookmark} />                                                                                                           
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
              <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
              <div className="bookmark-list">
                  {filteredBookmarks.map(bookmark => (
                      <BookmarkCard
                          key={bookmark.id}                                                                                                                     
                          bookmark={bookmark}
                          onDelete={deleteBookmark}
                      />
                  ))}
              </div>
          </div>
      );
  }

  export default App;
