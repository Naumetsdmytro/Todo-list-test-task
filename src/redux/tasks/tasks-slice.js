import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  'name': 'tasks',
  'initialState': [],
  'reducers': {
    addTask(state, action) {
      state.push({
        'id': nanoid(),
        'text': action.payload,
        'completed': false,
      });
    },
    toggleTask(state, action) {
      const foundTask = state.find((task) => task.id === action.payload);
      if (foundTask) {
        foundTask.completed = !foundTask.completed;
      }
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
