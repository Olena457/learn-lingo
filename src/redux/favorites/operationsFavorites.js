import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, database } from '../../config/firebase.js';
import { get, ref, set } from 'firebase/database';

// ___________________register user 1 variant

export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue('Is not authenticated');
      }
      const favoritesRef = ref(database, `users/${user.uid}/favorites`);
      const snapshot = await get(favoritesRef);

      if (snapshot.exists()) {
        const favoritesObject = snapshot.val();
        const favoritesIds = Object.keys(favoritesObject);

        const teacherPromises = favoritesIds.map(async id => {
          const teacherRef = ref(database, `teachers/${id}`);
          const teacherSnapshot = await get(teacherRef);
          return { id, ...teacherSnapshot.val() };
        });

        const favoritesArray = await Promise.all(teacherPromises);
        return favoritesArray;
      } else {
        return [];
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ___________________logout user+ get favorites + set to fitebase 3in 1

export const toggleFavorite = createAsyncThunk(
  'favorites/toggleFavorite',
  async (teacherId, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        return thunkAPI.rejectWithValue('Is not authenticated');
      }
      const favoritesRef = ref(database, `users/${user.uid}/favorites`);
      const snapshot = await get(favoritesRef);

      let favorites = {};
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (typeof data === 'object' && data !== null) {
          favorites = data;
        } else {
          throw new Error('Data format is not correct');
        }
      }

      if (favorites[teacherId]) {
        delete favorites[teacherId];
      } else {
        favorites[teacherId] = true;
      }

      await set(favoritesRef, favorites);
      return Object.keys(favorites);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
