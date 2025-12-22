import dotenv from "dotenv"

import app from "./app"

import connectDB from "./config/db"


connectDB()

const PORT = 5000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})