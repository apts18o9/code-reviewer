import cors from "cors"
import express from "express"

const app = express()

app.use(cors())
app.use(express.json())

import reviewRoutes from "./routes/reviewRoutes.js"

app.use("/api/reviews", reviewRoutes)

app.use("/", (req, res) => {
    res.send("AI code editor running")
})

export default app