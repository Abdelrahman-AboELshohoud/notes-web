import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"; // Import the new Note component

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/api/notes/");
      setNotes(res.data);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/api/notes/delete/${id}/`);
      getNotes();
    } catch (error) {
      alert(error.message);
    }
  };

  const createNote = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    try {
      await api.post("/api/notes/", { content, title });
      setTitle("");
      setContent("");
      getNotes();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1
        style={{
          color: "#2d3748",
          textAlign: "center",
          marginBottom: "2rem",
          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Notes App
      </h1>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ color: "#4a5568", marginTop: 0 }}>Create New Note</h2>
        <form
          onSubmit={createNote}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            <label
              htmlFor="title"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
              }}
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "1rem",
                ":focus": {
                  outline: "none",
                  borderColor: "#6a11cb",
                  boxShadow: "0 0 0 3px rgba(106, 17, 203, 0.1)",
                },
              }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                color: "#4a5568",
              }}
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                fontSize: "1rem",
                minHeight: "120px",
                resize: "vertical",
                ":focus": {
                  outline: "none",
                  borderColor: "#6a11cb",
                  boxShadow: "0 0 0 3px rgba(106, 17, 203, 0.1)",
                },
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#6a11cb",
              color: "white",
              border: "none",
              padding: "0.75rem",
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              ":hover": {
                backgroundColor: "#2575fc",
              },
            }}
          >
            {isLoading ? "Creating..." : "Create Note"}
          </button>
        </form>
      </div>

      <div>
        <h2 style={{ color: "#4a5568", marginBottom: "1rem" }}>Your Notes</h2>
        {isLoading ? (
          <p style={{ textAlign: "center", color: "#718096" }}>
            Loading notes...
          </p>
        ) : notes.length === 0 ? (
          <p style={{ textAlign: "center", color: "#718096" }}>
            No notes yet. Create one above!
          </p>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {notes.map((note) => (
              <Note key={note.id} note={note} onDelete={deleteNote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
