import { useState, useEffect } from "react"

//Para usar un reducer, disparar eventos
import { useDispatch, useSelector} from "react-redux"
import { addTask } from '../features/tasks/taskSlice'

import {v4 as uuid} from 'uuid'; // Para generar ID unicos

import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import { editTask } from "../features/tasks/taskSlice";

const TaskForm = () => {

   const [task, setTask] = useState({
      title: '',
      description: ''
   })

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const params = useParams();
   const tasks = useSelector(state => state.tasks)

   useEffect(() => { 
      console.log(params)

      // Si existe el parametro id
      if(params.id){
        setTask(tasks.find(task => task.id === params.id))   
      }

   },[params.id,tasks]);

   const handleChange = e => {
      setTask({
        ...task,
        [e.target.name]: e.target.value,
      })
   }

   const handleSubmit = (e) => { 
        e.preventDefault();
        //console.log(task);

        if(params.id){
          dispatch(editTask(task));
        }else{
          dispatch(addTask({
            ...task,
            id: uuid()
          }));
        }

        navigate('/');
    }

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4 rounded-md'>
        <label htmlFor="title" className="block text-sm font-bold">Task:</label>
        <input name='title' type="text" placeholder='title' onChange={handleChange} value={task.title} 
          className='w-full p-2 rounded-md bg-zinc-600 mb-4'
        />

        <label htmlFor="description" className="block text-sm font-bold">Description:</label>
        <textarea name="description" placeholder='descripcion' onChange={handleChange} value={task.description}
         className='w-full p-2 rounded-md bg-zinc-600 mb-2'
        ></textarea>
        <button
          className="bg-emerald-900 px-4 py-1 rounded-md"
        >Save</button>
    </form>
  )
}

export default TaskForm