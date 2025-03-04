
import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'


interface Todo {
  _id: string;
  todo: string;
}

function App() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const getAllTodo = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/todo/allTodos`)
      console.log(response.data)
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getAllTodo()
  }, [])

  const handleChange = (e: any) => {
    setTodo(e.target.value)
  }
  useEffect(() => {
    console.log(todos)
  }, [todos])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${API_BASE_URL}/todo/create`, { todo })
      console.log(response)
      getAllTodo()
    } catch (error) {
      console.log(error)
    }


  }


  return (
    <>
      <div>
        <div className='todo'>
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => handleChange(e)} className='input' type='text'></input>
            <button type='button' onClick={handleSubmit} className='add' >Add</button>
          </form>
          <ul>
            {todos.map((todos) => (
              <li key={todos._id}>{todos.todo}</li>
            ))}
          </ul>
          
        </div>
      </div>
    </>
  )
}

export default App
