import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="bg-zinc-900 h-screen text-white flex flex-col items-center justify-center">

      <h1 className='text-4xl mb-10'> TASK APP </h1>

      <BrowserRouter>
        <Routes>
          
          {/* Componente que se carga por defecto ruta raíz */}
          <Route path='/' element={<TaskList />}/>
          
          {/* Componente que carga en la url/create-task */}
          <Route path='/create-task' element={<TaskForm />} />

          <Route path='/edit-task/:id' element={<TaskForm />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
