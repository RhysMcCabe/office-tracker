// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKEa-KiWGWKcziJ5y71WQzJIg7H4TW854",
  authDomain: "office-tracker-6a1b7.firebaseapp.com",
  projectId: "office-tracker-6a1b7",
  databaseURL:
    "https://office-tracker-6a1b7-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "office-tracker-6a1b7.appspot.com",
  messagingSenderId: "645977394372",
  appId: "1:645977394372:web:acadf635d9d7c0557ccd91",
  measurementId: "G-ZCGLR04N8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
