import {useSelector,useDispatch} from 'react-redux'

//Reducer
import { deleteTask } from '../features/tasks/taskSlice';

// Navegar al pulsar sobre un link pero sin refresh
import {Link} from 'react-router-dom';

const TaskList = () => {

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => { 
        console.log(id);
        dispatch(deleteTask(id));
    }

  return (
    <div className='w-4/6 bg-emerald-800 bg-opacity-50 p-7 rounded-lg'>
        <header className='flex justify-between items-center py-4'>
            <h1 className='font-mono text-3xl'> {tasks.length} Tasks</h1>

            <Link to='/create-task' className='bg-emerald-900 py-1 px-2 rounded-md '> Create Task </Link>
        </header>

        <div className='grid grid-cols-3 gap-3'>
        {
            tasks.map(task => {
                return <div key={task.id} className="bg-neutral-900 rounded-md p-5">
                    <header className='flex  justify-between'>
                        <h3>{task.title}</h3>
                        <div className='flex gap-x-2'>

                                                        
                            <Link to={`/edit-task/${task.id}`}
                                className='bg-lime-700 px-2 py-1 rounded-md self-center'
                            >Edit</Link>

                            <button onClick={()=>handleDelete(task.id)} 
                                className='bg-red-500 px-2 py-1 rounded-md self-center'
                            >Delete</button>

                        </div>
                    </header>
                    <p>{task.description}</p>
                </div>
            })
        }

        </div>
    </div>
  )
}

export default TaskList