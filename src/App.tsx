
import './App.css';
import Todos from './components/Todos'
import ToDo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const NewTodo = new ToDo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(NewTodo);
    });
  
  };
  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos items={todos}/>
    </div>
  );
}

export default App;
