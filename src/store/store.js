import { configureStore } from '@reduxjs/toolkit'
import eventsListSlice from './features/events/eventsListSlice'
import loggerMiddleware from '../middleware/logger'

export const store = configureStore({ 
  reducer: {   
    eventsList: eventsListSlice,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
      
})
