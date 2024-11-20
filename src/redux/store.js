import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/sliceAuth.js';
import { teachersReducer } from './teachers/sliceTeachers';
import { favoritesReducer } from './favorites/sliceFavorites';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teachersReducer,
    favorites: favoritesReducer,
  },
});
