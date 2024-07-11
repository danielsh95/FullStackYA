// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaRn3YwJhq1I9hZpyYjuXCuUjOlPzPZGs",
    authDomain: "react-final-project-cf3fa.firebaseapp.com",
    projectId: "react-final-project-cf3fa",
    storageBucket: "react-final-project-cf3fa.appspot.com",
    messagingSenderId: "1015024866439",
    appId: "1:1015024866439:web:7501c52725ca8fef9a5422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;