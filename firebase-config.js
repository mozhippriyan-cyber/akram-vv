import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBUzO90MhDWaRn_3kkWB1aJOYai7aeKE-8",
  authDomain: "vocabulary-academy.firebaseapp.com",
  projectId: "vocabulary-academy",
  storageBucket: "vocabulary-academy.firebasestorage.app",
  messagingSenderId: "507242998830",
  appId: "1:507242998830:web:53820d4213de0ea54943bf"
};

export const app = initializeApp(firebaseConfig);