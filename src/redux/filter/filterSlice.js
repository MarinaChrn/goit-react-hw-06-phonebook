import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
  },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    }
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeSearch } = filterSlice.actions;