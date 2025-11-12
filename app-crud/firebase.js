// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHXPNslPPYtLaSWdoXIWkpATtj26vj3iI",
  authDomain: "dispositivos-moveis-b398f.firebaseapp.com",
  projectId: "dispositivos-moveis-b398f",
  storageBucket: "dispositivos-moveis-b398f.firebasestorage.app",
  messagingSenderId: "721573865143",
  appId: "1:721573865143:web:949c7200a1935da7908f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const autenticacao = getAuth(app);

export { autenticacao };