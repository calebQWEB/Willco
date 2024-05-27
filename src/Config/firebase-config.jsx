import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFaQab43RNQByEC799os79PTQquGy_-Ic",
  authDomain: "willco-website.firebaseapp.com",
  projectId: "willco-website",
  storageBucket: "willco-website.appspot.com",
  messagingSenderId: "173459325508",
  appId: "1:173459325508:web:73680087a106e2194db211",
  measurementId: "G-PG0B0NTQHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
