// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCno_gPM6Zxiw6rF1JQop2RhJQojDXRXH8",
  authDomain: "category-lily.firebaseapp.com",
  projectId: "category-lily",
  storageBucket: "category-lily.firebasestorage.app",
  messagingSenderId: "968594154640",
  appId: "1:968594154640:web:db3b9fe1c83bc2fc2c6415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;