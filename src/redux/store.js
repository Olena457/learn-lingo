import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/sliceAuth.js';
import { teachersReducer } from './teachers/sliceTeachers.js';
import { favoritesReducer } from './favorites/sliceFavorites.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    favorites: favoritesReducer,
  },
});
export default store;
