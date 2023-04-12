import '../assets/css/To-do.css';
import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
import leftLogo from '../assets/img/leftLogo.png'
import leftLogo2 from '../assets/img/leftLogo2.png'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos)
    };
    
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return 
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    };

    return (
    <div id='to-do-center'>
        <img id='leftLogo2' src={leftLogo2} />
        <img id='leftLogo' src={leftLogo} />
        <div className='To-do-background'>
            <h1 id='to-do-text-title'>What are your tasks for today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    </div>
  )
}

export default TodoList