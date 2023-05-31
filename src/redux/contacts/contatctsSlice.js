import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: JSON.parse(localStorage.getItem('contacts')),
  },
  reducers: {
    change(state, action) {
      state.array = action.payload;
    }
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { change } = contactsSlice.actions;