// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-homeizz.firebaseapp.com",
  projectId: "mern-homeizz",
  storageBucket: "mern-homeizz.appspot.com",
  messagingSenderId: "482068183915",
  appId: "1:482068183915:web:652726c2cde6c0766dea2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);