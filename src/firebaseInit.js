// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcMK5EnHM7Q0BHShs7Op7tcC4JWyfM_UY",
  authDomain: "e-commerce-app-52c8b.firebaseapp.com",
  projectId: "e-commerce-app-52c8b",
  storageBucket: "e-commerce-app-52c8b.firebasestorage.app",
  messagingSenderId: "304188604559",
  appId: "1:304188604559:web:146d281211944efc17f0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);