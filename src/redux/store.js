import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer, filtersReducer } from './reducer';

// const rootReducers = { name: '' };
// const enhancer = devToolsEnhancer();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
