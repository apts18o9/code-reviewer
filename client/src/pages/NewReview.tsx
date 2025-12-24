import { useState } from "react";
import { createReview } from "../services/reviewApi";
import { useNavigate } from "react-router-dom";

const NewReview = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError("Code cannot be empty");
      return;
    }

      try {
      setLoading(true);
      setError("");

      // send a default language when the form doesn't include one
      await createReview({ code, language: "plaintext" }); 
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to submit code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>New Code Review</h2>

      <textarea
        rows={12}
        style={{ width: "100%", marginTop: "10px" }}
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ marginTop: "10px" }}
      >
        {loading ? "Submitting..." : "Submit for Review"}
      </button>
    </div>
  );
};

export default NewReview;
