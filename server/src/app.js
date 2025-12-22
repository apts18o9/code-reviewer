import cors from "cors"
import express from "express"

const app = express()

app.use(cors())
app.use(json())

app.use("/", (req, res) => {
    res.send("AI code editor running")
})


module.exports = app;