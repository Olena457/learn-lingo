import { database } from '../config/firebase.js';
import { ref, push, set } from 'firebase/database';
const addTeachersToDatabase = async teachers => {
  const teachersRef = ref(database, 'teachers');
  try {
    for (const teacher of teachers) {
      const newTeacherRef = push(teachersRef);
      await set(newTeacherRef, teacher);
      console.log('Teacher added with ID:', newTeacherRef.key);
    }
    console.log('All teachers added successfully');
  } catch (error) {
    console.error('Error adding teachers:', error);
  }
};
const teachers = [];
addTeachersToDatabase(teachers);
