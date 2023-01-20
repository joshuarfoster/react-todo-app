import React, {useState} from 'react'
import Todo from './Todo.js'
import NewTodoForm from './NewTodoForm.js'

function TodoList () {
    const [todos,setTodos] = useState([])
    const addTodo = (task) => {
        setTodos(todos => [...todos, task])
    }
    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo,idx) => idx !== id)
        setTodos(newTodos)
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map((todo,idx) => <Todo task={todo} deleteTodo={deleteTodo} idx={idx}/>)}
            </ul>
        </>
    )
}


export default TodoList;