import mongoose from "mongoose"

const codeReviewSchema = new mongoose.Schema(
    {
        language: {
            type: String,
            required: true,
            enum: ['javascript', 'c++']
        },
        code: {
            type: String,
            required: true,
        },
        reviewResult: {
            type: Object,
            default: null,
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("codeReview",codeReviewSchema)