import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            color: "#ff6b6b",
            marginBottom: "20px",
            lineHeight: "1",
          }}
        >
          404
        </div>

        <h1
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            color: "#343a40",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#6c757d",
            marginBottom: "30px",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => window.history.back()}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#4e73df",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#3a56c7")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4e73df")}
        >
          Go Back
        </button>

        <div
          style={{
            marginTop: "30px",
            color: "#adb5bd",
            fontSize: "14px",
          }}
        >
          Or{" "}
          <a
            href="/"
            style={{
              color: "#4e73df",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            return home
          </a>
        </div>
      </div>
    </div>
  );
}
