

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAH_tDyR2HvGQ6CE-O6Zyp-wL42fGoFcn8",
  authDomain: "notes-e6369.firebaseapp.com",
  projectId: "notes-e6369",
  storageBucket: "notes-e6369.firebasestorage.app",
  messagingSenderId: "345490192967",
  appId: "1:345490192967:web:c9a115d80b1ffaa9110f62",
  measurementId: "G-5WEV61NVY5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
