import { useState } from "react";

  function AddBookmarkForm({ onAdd }) {
      const [title, setTitle] = useState("");
      const [url, setUrl] = useState("");
      const [category, setCategory] = useState("personal");

      function handleSubmit(e) {
          e.preventDefault();
          if (!title || !url) return;
          onAdd({ title, url, category });
          setTitle("");
          setUrl("");
          setCategory("personal");
      }

      return (
          <form onSubmit={handleSubmit}>
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
              <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="personal">Personal</option>
                  <option value="work">Work</option>
                  <option value="learning">Learning</option>
                  <option value="entertainment">Entertainment</option>
              </select>
              <button type="submit">Add Bookmark</button>
          </form>
      );
  }

  export default AddBookmarkForm;
