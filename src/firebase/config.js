// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPVap-cKVuV1314Xxc8zD4JQPlaaqhi9k",
  authDomain: "mini-3a484.firebaseapp.com",
  projectId: "mini-3a484",
  storageBucket: "mini-3a484.appspot.com",
  messagingSenderId: "369665038002",
  appId: "1:369665038002:web:99a97ce328cb4039801bab",
  measurementId: "G-5DYHR96BF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);   
export { db };