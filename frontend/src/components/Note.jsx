const Note = ({ note, onDelete }) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        transition: "all 0.3s ease",
        borderLeft: "5px solid #6a11cb",
        marginBottom: "1.5rem",
        position: "relative",
        ":hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "0.5rem",
        }}
      >
        <h3
          style={{
            color: "#2c3e50",
            margin: "0",
            fontSize: "1.25rem",
            fontWeight: "600",
            maxWidth: "80%",
          }}
        >
          {note.title}
        </h3>

        <span
          style={{
            color: "#718096",
            fontSize: "0.85rem",
            backgroundColor: "#f8f9fa",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
          }}
        >
          {formattedDate}
        </span>
      </div>

      <p
        style={{
          color: "#4a5568",
          marginBottom: "1.5rem",
          lineHeight: "1.6",
          whiteSpace: "pre-wrap",
        }}
      >
        {note.content}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={() => onDelete(note.id)}
          style={{
            backgroundColor: "transparent",
            color: "#e53e3e",
            border: "1px solid #e53e3e",
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontWeight: "500",
            fontSize: "0.9rem",
            ":hover": {
              backgroundColor: "#e53e3e",
              color: "white",
            },
          }}
        >
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default Note;
