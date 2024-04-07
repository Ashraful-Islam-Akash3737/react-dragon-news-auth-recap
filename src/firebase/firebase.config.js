// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3GYaKrtcufmx17Uv6qYP4HzLCb0DIouw",
  authDomain: "react-dragon-news-auth-24fc9.firebaseapp.com",
  projectId: "react-dragon-news-auth-24fc9",
  storageBucket: "react-dragon-news-auth-24fc9.appspot.com",
  messagingSenderId: "873604726792",
  appId: "1:873604726792:web:d1124d669258beab1151bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;