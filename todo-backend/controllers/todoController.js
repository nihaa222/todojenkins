import Todo from "../models/Todo.model.js";

 const createTodo = async(req, res) =>{
  try {
    const {todo} = req.body;

    const newTodo = new Todo({
        todo,
    })

    await newTodo.save()

    res.status(201).json({"message": "done"})

  }catch (error) {
    console.log(error)
     res.status(500).send("Error creating todo")
  }
}



const getTodos = async(req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)

    } catch (error) {
       console.log(error)
       res.status(500).send("get the todos")
    }
}

export  {getTodos, createTodo};