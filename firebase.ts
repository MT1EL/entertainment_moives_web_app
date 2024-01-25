// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt9RHtGRo2g1GEMdWkNkuqraf6-1ac--E",
  authDomain: "entertainment-movies-app.firebaseapp.com",
  projectId: "entertainment-movies-app",
  storageBucket: "entertainment-movies-app.appspot.com",
  messagingSenderId: "935664362555",
  appId: "1:935664362555:web:f0e52a5c7a56949e68a81e",
  measurementId: "G-7LNQDFKT94",
};

// Initialize Firebase

// export default app;

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
// export const db = getDatabase();
export const storage = getStorage(app);
export const auth = getAuth();
