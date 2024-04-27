// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAksE9QCfCLLGB73j2cL9UZfEUppyUNLjE",
  authDomain: "explore-southeast-asia.firebaseapp.com",
  projectId: "explore-southeast-asia",
  storageBucket: "explore-southeast-asia.appspot.com",
  messagingSenderId: "117761357007",
  appId: "1:117761357007:web:1c95b9df758226ef5273ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;