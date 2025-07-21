// src/redux/recurrenceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'daily',
  interval: 1,
  daysOfWeek: [],
  pattern: '',
  startDate: '',
  endDate: '',
};

export const recurrenceSlice = createSlice({
  name: 'recurrence',
  initialState,
  reducers: {
    setType: (state, action) => { state.type = action.payload },
    setInterval: (state, action) => { state.interval = action.payload },
    setDaysOfWeek: (state, action) => { state.daysOfWeek = action.payload },
    setPattern: (state, action) => { state.pattern = action.payload },
    setStartDate: (state, action) => { state.startDate = action.payload },
    setEndDate: (state, action) => { state.endDate = action.payload },
  },
});

export const {
  setType,
  setInterval,
  setDaysOfWeek,
  setPattern,
  setStartDate,
  setEndDate,
} = recurrenceSlice.actions;

export default recurrenceSlice.reducer;
