import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyBOkktfFRQvEg0gvmYoNSK9XdMiP0rAOOM",
  authDomain: "hotel-management-system-79213.firebaseapp.com",
  projectId: "hotel-management-system-79213",
  storageBucket: "hotel-management-system-79213.firebasestorage.app",
  messagingSenderId: "544619468106",
  appId: "1:544619468106:web:cd68a419bba841e0115db3",
  measurementId: "G-YMNS5JY71E",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
