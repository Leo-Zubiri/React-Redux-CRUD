import {useSelector} from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  
  //Desde la store obtener el estado de las tareas
  const taskState = useSelector(state => state.tasks)

  return (
    <div className="App">
      <p>Hola Mundo</p>

      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
