import CodeReview from "../models/CodeReview.js"


const createReview = async (req, res) => {
  try {
    const { language, code } = req.body;

    if (!language || !code) {
      return res.status(400).json({ message: "Language and code are required" });
    }

    const review = await CodeReview.create({
      language,
      code,
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await CodeReview.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//get single review

const getReviewById = async (req, res) => {
    try {
        const review = await CodeReview.findById(req.params.id)

        if(!review){
            return res.status(400).json({message: "Review not found"})
        }

        res.json(review)

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export {
    createReview,
    getAllReviews,
    getReviewById,
}