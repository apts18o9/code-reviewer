import express from 'express';
const router = express.Router();


import { createReview, getAllReviews, getReviewById } from "../controllers/reviewControllers.js"

router.post("/", createReview)
router.get("/", getAllReviews)
router.get("/:id", getReviewById)

export default router