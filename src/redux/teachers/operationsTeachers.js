import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ref,
  get,
  set,
  query,
  orderByKey,
  startAfter,
  limitToFirst,
} from 'firebase/database';
import { auth, database } from '../../config/firebase.js';

// __________________fearch teacher2
export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(database, 'teachers');
      const snapshot = await get(teachersRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (typeof data === 'object' && data !== null) {
          const teachersArray = Object.keys(data).map(id => ({
            id,
            ...data[id],
          }));
          return teachersArray;
        } else {
          return thunkAPI.rejectWithValue('Data format is not correct');
        }
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ___________________book teacher

export const bookTeacher = createAsyncThunk(
  'teachers/bookTeacher',
  async ({ fullname, email, phoneNumber, question, teacherID }, thunkAPI) => {
    try {
      const user = auth.currentUser;
      const uid = user.uid;

      const contactRef = ref(database, `booking/${teacherID}/${uid}`);

      await set(contactRef, {
        fullname,
        email,
        phoneNumber,
        question,
        teacherID,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ____________________fetch teachers with pagination

export const fetchTeachersPaginated = createAsyncThunk(
  'teachers/fetchTeachersPaginated',
  async ({ lastKey = null }, thunkAPI) => {
    try {
      const teachersRef = ref(database, 'teachers');

      const teachersQuery = lastKey
        ? query(teachersRef, orderByKey(), startAfter(lastKey), limitToFirst(4))
        : query(teachersRef, orderByKey(), limitToFirst(4));

      const snapshot = await get(teachersQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();

        console.log('Fetched data from Firebase:', data);

        const teachersArray = Object.keys(data).map(id => ({
          id,
          ...data[id],
        }));

        const result = {
          teachers: teachersArray,
          lastKey: teachersArray[teachersArray.length - 1]?.id || null,
        };
        console.log('result: ', result);

        return result;
      } else {
        return thunkAPI.rejectWithValue('No data available');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
