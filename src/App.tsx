
import './App.css';
import Todos from './components/Todos'
import ToDo from './models/todo';
function App() {
  const todos = [
    new ToDo('Learn React'),
    new ToDo('Learn Java1')
  ]
  return (
    <div >
     <Todos items={todos}/>
    </div>
  );
}

export default App;
