 function BookmarkCard({ bookmark, onDelete }) {
      return (
          <div className="bookmark-card">
              <h3>{bookmark.title}</h3>
              <a href={bookmark.url} target="_blank">{bookmark.url}</a>
              <span className="category">{bookmark.category}</span>
              <button onClick={() => onDelete(bookmark.id)}>Delete</button>
          </div>
      );
  }
  
  export default BookmarkCard;
