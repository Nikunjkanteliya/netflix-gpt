// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH7djbyXwCrHX9vDCMNvoqmGTmtan06rk",
  authDomain: "netflixgpt-d0d58.firebaseapp.com",
  projectId: "netflixgpt-d0d58",
  storageBucket: "netflixgpt-d0d58.firebasestorage.app",
  messagingSenderId: "340092859070",
  appId: "1:340092859070:web:5005040fca4a53e919a4ef",
  measurementId: "G-GCEZ0G70Y7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
