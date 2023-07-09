import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");

  function addTodo() {
    setTodos([{text: todo, isCompleted: false}, ...todos]);
    setTodo("");
  }

  function toggleComplete(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <input type="text" placeholder="Enter Todo List Title..." value={title} onChange={e => setTitle(e.target.value)} />
      <form onSubmit={e => {
        e.preventDefault();
        addTodo();
      }}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.text}</td>
              <td>{todo.isCompleted ? "Completed" : "In Progress"}</td>
              <td>
                <button onClick={() => toggleComplete(index)}>{todo.isCompleted ? "Undo" : "Complete"}</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
