import React, { useState } from 'react'
import './App.css';
import Todo from './components/Todo/Todo';
import TodoForm from './components/TodoForm/TodoForm';





function App() {
  const [todos, setTodos] = useState([])


  const completeTodoHandler = (e, index) => {
    e.preventDefault();
    let todosClone = [...todos];
    let todo = todosClone[index];
    todo.completed = true;
    // console.log(todosClone);
    setTodos(todosClone)

  }

  const removeTodoHandler = (index) => {
    let todosClone = [...todos];
    todosClone.splice(index, 1);
    setTodos(todosClone)
  }

  const addTodoHandler = (value) => {
    const todo = {
      text: value,
      completed: false
    }
    const addedTodos = [...todos, todo]
    setTodos(addedTodos);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="Todo-List">

        {todos.length === 0 ?
          <h1 style={{ color: 'black' }}>Start Day with TODO</h1>
          : todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo.text}
              completed={todo.completed}
              completeClicked={(event) => completeTodoHandler(event, index)}
              removeClicked={() => removeTodoHandler(index)} />
          )
          )}
        <TodoForm
          placeholder='Add Task'
          addTodo={addTodoHandler} />
      </div>
    </div>
  );
}

export default App;
