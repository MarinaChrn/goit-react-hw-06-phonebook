import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage"
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: JSON.parse(localStorage.getItem('persist:contactsArray'))["array"]&&[],
  },
  reducers: {
    change(state, action) {
      state.array = action.payload;
    }
  },
});

const persistConfig = {
    key: "contactsArray",
    storage,
    whitelist: ["array"]
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { change } = contactsSlice.actions;