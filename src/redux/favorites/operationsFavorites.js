import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, database } from '../../config/firebase.js';
import { get, ref, set } from 'firebase/database';

// ___________________register user
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        return thunkAPI.rejectWithValue('Is not authenticated');
      }
      const favoritesRef = ref(database, `user/${user.uid}/favorites`);
      const snapshot = await get(favoritesRef);
      // if (snapshot.exists()) {
      //   const favoritesObject = snapshot.val();
      //   const favoritesArray = Object.keys(favoritesObject).map(key =>
      //     ({ id: key, ...favoritesObject[key], }));
      //   return favoritesArray;

      if (snapshot.exists()) {
        const favorites = JSON.parse(snapshot.val());
        return favorites ? favorites : [];
      } else {
        throw new Error('Something went wrong. Try login again.');
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ___________________logout user
export const toggleFavorite = createAsyncThunk(
  'favorites/toggleFavorite',
  async (teacher, thunkAPI) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        return thunkAPI.rejectWithValue('Is not authenticated');
      }
      const favoritesRef = ref(database, `user/${user.uid}/favorites`);
      const snapshot = await get(favoritesRef);
      if (snapshot.exists()) {
        // ___________get favorites
        const favorites = JSON.parse(snapshot.val());
        const id = teacher.id;
        const index = favorites.findIndex(t => t.id === id);
        if (index !== -1) {
          favorites.splice(index, 1);
        } else {
          favorites.push(teacher);
        }

        // _________set to firebase
        await set(
          ref(database, `user/${user.uid}/favorites`),
          JSON.stringify(favorites)
        );
        return favorites;
      } else {
        throw new Error('Something is wrong');
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
