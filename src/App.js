import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");

  function addTodo() {
    setTodos([{text: todo, status: "Pending"}, ...todos]);
    setTodo("");
  }

  function updateStatus(index, status) {
    const newTodos = [...todos];
    newTodos[index].status = status;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      
      <input type="text" placeholder="Enter Todo List Title..." value={title} onChange={e => setTitle(e.target.value)} />
      <h2>{title}</h2>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo();
      }}>
        <input type="text" placeholder="Enter Todo..." value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
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
              <td>
                <select value={todo.status} onChange={e => updateStatus(index, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
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
