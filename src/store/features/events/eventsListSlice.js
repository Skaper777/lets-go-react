import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  eventsList: [],
  myEvents: []
}

export const getEvents = createAsyncThunk(
  'eventsList/getEvents',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get('https://letsgo-react-default-rtdb.europe-west1.firebasedatabase.app/events.json')
      
      const events = []  

      Object.keys(res.data).forEach((key, i) => {
        const ev = res.data[key]
        ev.id = key
        events.push(ev)
      })   

      //dispatch(setEvents(events))
      return events
    } catch (error) {
      console.error(error)
    }    
  }
)

export const eventsListSlice = createSlice({
  name: 'eventsList',
  initialState,
  reducers: {
    // setEvents: (state, action) => {
    //   state.eventsList = action.payload          
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.eventsList = action.payload  
    })
    builder.addCase(getEvents.rejected, () => {
      console.error('rejected') 
    })   
  }
})

// export const { setEvents } = eventsListSlice.actions 
export default eventsListSlice.reducer
