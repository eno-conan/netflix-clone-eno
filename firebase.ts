// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQF96Doghn2JepbSB1-OOHwTRo0lXG0Fg",
  authDomain: "netflix-clone-pjt-99307.firebaseapp.com",
  projectId: "netflix-clone-pjt-99307",
  storageBucket: "netflix-clone-pjt-99307.appspot.com",
  messagingSenderId: "331340841497",
  appId: "1:331340841497:web:f1a48ca0b232d01039e088",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
