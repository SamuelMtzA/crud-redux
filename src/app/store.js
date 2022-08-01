import {configureStore} from '@reduxjs/toolkit';
import { reducer } from '../features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: reducer,
  },
  devTools: true,
  middleware: [
  ],
});


