import { createSelector } from '@reduxjs/toolkit'
import { selectFilterValue } from 'redux/filter/selectors'

export const selectTasks = (state) => state.tasks

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilterValue],
  (tasks, filter) => {
    switch (filter) {
      case 'COMPLETED': {
        return tasks.filter((task) => task.completed)
      }
      case 'CURRENT': {
        return tasks.filter((task) => !task.completed)
      }
      default: {
        return tasks
      }
    }
  },
)
