import mongoose from "mongoose"

const codeReviewSchema = new mongoose.Schema(
    {
        language: {
            type: String,
            required: true,
            enum: ['javascript', 'c++', 'java']
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

export default mongoose.model("CodeReview", codeReviewSchema)