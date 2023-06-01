// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6rzBIUI-tu0DJN7rwi_VbFU8JvYGgaZE",
  authDomain: "murashack.firebaseapp.com",
  projectId: "murashack",
  storageBucket: "murashack.appspot.com",
  messagingSenderId: "706078223817",
  appId: "1:706078223817:web:2d954fc9c13afb7b5dcc18",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
