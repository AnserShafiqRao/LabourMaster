// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD52SH5F2BQGNjevNMk58UIhp4Q8_nsRZs",
    authDomain: "labour-master-data.firebaseapp.com",
    projectId: "labour-master-data",
    storageBucket: "labour-master-data.appspot.com",
    messagingSenderId: "477185892397",
    appId: "1:477185892397:web:0ead9bdee926a5536e58a4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);