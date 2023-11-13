// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6737c.firebaseapp.com",
  projectId: "mern-estate-6737c",
  storageBucket: "mern-estate-6737c.appspot.com",
  messagingSenderId: "663102143176",
  appId: "1:663102143176:web:817e96a24ec24c95fc83fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);