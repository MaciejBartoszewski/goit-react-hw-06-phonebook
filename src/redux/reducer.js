import { createReducer } from '@reduxjs/toolkit';
import { addContact, setFilter, deleteContact } from './action';

const contactsInitial = [];

export const contactsReducer = createReducer(contactsInitial, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contacts => contacts.id !== action.payload);
  },
});

const filtersInitial = '';

export const filtersReducer = createReducer(filtersInitial, {
  [setFilter]: (_, action) => {
    return action.payload;
  },
});
