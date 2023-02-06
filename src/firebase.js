// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5NDUvxvgrWuSJi0kZZkV88plpImiIhg",
  authDomain: "bookshop-447e7.firebaseapp.com",
  projectId: "bookshop-447e7",
  storageBucket: "bookshop-447e7.appspot.com",
  messagingSenderId: "690552468321",
  appId: "1:690552468321:web:0f876f89c1fee53365cb20",
  measurementId: "G-QWMY5Y6G0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
