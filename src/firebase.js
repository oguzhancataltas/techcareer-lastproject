// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-VkaJLAPBr4272-I58CLxzMzVzi2NBjU",
  authDomain: "movie-app-4fd1e.firebaseapp.com",
  projectId: "movie-app-4fd1e",
  storageBucket: "movie-app-4fd1e.appspot.com",
  messagingSenderId: "680675677913",
  appId: "1:680675677913:web:ba6c810844053225b0d0c8",
  measurementId: "G-YNGS8XB6VC",
  databaseURL: "https://movie-app-4fd1e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;