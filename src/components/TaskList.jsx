import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../features/tasks/taskSlice';

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const { removeTask } = actions;

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  }
  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center'>
        <h1>Number of tasks: {tasks.length}</h1>
        <Link to='/create-task'
        className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>
          Create a new task
        </Link>
      </header>
      <div className='grid grid-cols-3 gap-4'>
      {
        tasks.map(task => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header
            className='flex justify-between'
            >
              <h2>{task.title}</h2>
              <div className='flex gap-x-2'>
                <Link
                className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'
                to={`/edit-task/${task.id}`}>Edit</Link>
                <button 
                className='bg-red-600 px-2 py-1 text-xs rounded-md'
                onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>

              </div>
            </header>
            <p>Description: {task.description}</p>
          </div>
        ))
      }
      </div>

    </div>
  )
}
