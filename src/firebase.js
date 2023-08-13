// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBigeYXhaWieqGbaO2wTPDzfd8x7ZdYvmU",
  authDomain: "react-disney-plus-app-29b25.firebaseapp.com",
  projectId: "react-disney-plus-app-29b25",
  storageBucket: "react-disney-plus-app-29b25.appspot.com",
  messagingSenderId: "396105827922",
  appId: "1:396105827922:web:4e00aa59cf1c2e10a7418b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;