import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ8Mmry0MbtFoxX9IJtvj4ckRS-u5Z3ao",
  authDomain: "lrkinesio-2518a.firebaseapp.com",
  projectId: "lrkinesio-2518a",
  storageBucket: "lrkinesio-2518a.appspot.com",
  messagingSenderId: "262806785887",
  appId: "1:262806785887:web:7f2e13e2099fd232b1b0ea"
};

// Initialize Firebase
initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(<App />
  
)
