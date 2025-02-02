import React, { useState } from "react";
import axios from "axios";

export default function PptGeneration() {
  const [topic, setTopic] = useState("");
  const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/auth/generate-ppt",
        {
          topic,
          points: points.split("\n"), // Split points into an array
        },
        { responseType: "blob" } // Expect binary data (PPT file)
      );

      // Create a download link for the PPT file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${topic}.pptx`); // Download file with the topic as the name
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Error generating PPT:", err);
      setError("Failed to generate PPT. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI-based PPT Generator</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Topic:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Points (one per line):</label>
          <textarea
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            required
            rows="5"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate PPT"}
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}
