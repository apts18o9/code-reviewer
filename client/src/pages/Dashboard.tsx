import { useEffect, useState } from "react";
import { getAllReviews } from "../services/reviewApi";
import { Review } from "../types/review";

const Dashboard = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      {reviews.length === 0 && <p>No reviews yet</p>}

      {reviews.map((review) => (
        <div
          key={review._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>Created:</strong>{" "}
            {new Date(review.createdAt).toLocaleString()}
          </p>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "10px",
              maxHeight: "120px",
              overflow: "hidden",
            }}
          >
            {review.code}
          </pre>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
