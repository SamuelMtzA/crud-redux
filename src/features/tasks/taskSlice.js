import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
//add, remove, update, toggle

const initialState = [
  {
    id: v4(),
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: v4(),
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  }
]


export const tasks =  createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action, state);
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    updateTask: (state, action) => {
      const { id, title, description, completed } = action.payload;
      const isTaskFound = state.find(task => task.id === id);
      if (isTaskFound) {
        isTaskFound.title = title;
        isTaskFound.description = description;
        isTaskFound.completed = completed;
      }
    },
  },
})

export const { actions, reducer } = tasks;