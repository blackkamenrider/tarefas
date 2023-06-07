import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'
// import filtersReducer from './filtersSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    // filters: filtersReducer
  }
})
export default store;