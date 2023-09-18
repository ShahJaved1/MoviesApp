// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDAX6Go40kHM0wrHk12hD19DinEWp1Veo",
  authDomain: "movieapp-5b70c.firebaseapp.com",
  projectId: "movieapp-5b70c",
  storageBucket: "movieapp-5b70c.appspot.com",
  messagingSenderId: "892068476549",
  appId: "1:892068476549:web:b0b409ec37f2f5bff75bec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);