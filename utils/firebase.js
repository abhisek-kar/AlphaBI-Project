// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Q4cuZ6oa8Y1UlHsUZ55H_2mOyJw08SI",
  authDomain: "alphabi-e0a88.firebaseapp.com",
  projectId: "alphabi-e0a88",
  storageBucket: "alphabi-e0a88.appspot.com",
  messagingSenderId: "561706179069",
  appId: "1:561706179069:web:bf3016a35ba98fde8a2194",
  measurementId: "G-8QQRC6WR5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
