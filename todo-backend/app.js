import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import todoRoutes from "./routes/todo.routes.js"
const app = express()
import cors from "cors";
app.use(cors());
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MONGO CONNECTED")).catch((error) => {
    console.log("Error connecting", error)
})

app.get( "/",(req, res) => {
    res.send("Hello I am running")
})

app.use("/todo", todoRoutes )

app.listen(3000, "0.0.0.0",() => {
    console.log("The port is running")
})

