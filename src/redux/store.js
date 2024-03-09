import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import { filterReducer } from './filter/filter-slice'
import { tasksReducer } from './tasks/tasks-slice'

const persistConfig = {
  'key': 'root',
  'version': 1,
  storage,
}

const rootReducer = combineReducers({
  'filter': filterReducer,
  'tasks': tasksReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  'reducer': persistedReducer,
  'middleware': (getDefaultMiddleware) => getDefaultMiddleware({
    'serializableCheck': {
      'ignoredActions': [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)
