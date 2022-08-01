import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskForm } from '../components/TaskForm'
import { TaskList } from '../components/taskList'
import '../App.css';

export const MainRoutes = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
