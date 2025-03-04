import express from "express"
import { getTodos, createTodo } from "../controllers/todoController.js"

const router = express.Router()

router.post("/create", createTodo)
router.get("/alltodos",getTodos)

export default router;