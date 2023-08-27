import {
  addContact,
  deleteContact,
  setFilter,
  updateContacts,
} from '../redux/action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(updateContacts, (state, action) => {
      state.items = action.payload;
    });
});
