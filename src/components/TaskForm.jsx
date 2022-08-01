import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate,useParams } from 'react-router-dom';


export const TaskForm = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatchAction = useDispatch();
  const navigateTo = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setTask({
      ...task,
      [ name ]: value
    });
  }

  const { addTask, updateTask } = actions;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatchAction(updateTask(task));
    } else {
      dispatchAction(addTask({
        ...task,
        id: uuid(),
        completed: false,
      }));
    }
    navigateTo('/');
  }

  useEffect(() => {
    console.log('TaskForm rendered');
    console.log(params);
    if(params.id){
      setTask(tasks.find((taskFound) => taskFound.id === params.id));
    }
  }, [params, tasks]);

  return (
    <form onSubmit={handleSubmit}
    className="bg-zinc-800 max-w-sm p-4">
      <label>
        Title: 
      </label>
      <input 
      onChange={onInputChange} 
      type="text"
      autoComplete="off"
      name="title" 
      value={task.title}
      placeholder="Title" 
      />
      <label>
        Description: 
      </label>
      <textarea 
      name="description"
      autoComplete="off"
      placeholder="Description"
      onChange={onInputChange}
      value={task.description}
      rows={5}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
