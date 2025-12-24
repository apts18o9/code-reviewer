const API_URL = "http://localhost:5000/api/reviews";

export const createReview = async (data: { code: string; language?: string }) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create review");
  }

  return res.json();
};

export const getAllReviews = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
