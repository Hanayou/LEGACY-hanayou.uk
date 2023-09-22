// Firebase Client SDK setup and initialisation
// Config information is not sensitive and can be kept in version control

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCZEXytEPyNvpksx6Gauaivl7aO52ngHZk",
    authDomain: "hanayou-uk.firebaseapp.com",
    projectId: "hanayou-uk",
    storageBucket: "hanayou-uk.appspot.com",
    messagingSenderId: "286399171496",
    appId: "1:286399171496:web:d2ee61ff4ec8938714ab9d",
    measurementId: "G-HWZN15WZLW"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();