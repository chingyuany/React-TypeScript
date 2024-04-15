
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
  const removeTodohandler = (todoId: string) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }
  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos items={todos} onRemoveTodo={removeTodohandler}/>
    </div>
  );
}

export default App;
