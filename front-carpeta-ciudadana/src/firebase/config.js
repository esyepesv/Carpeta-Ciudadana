// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfy9NoCd-Ia_ydretZ6dOPOE-As8pwsjE",
  authDomain: "carpeta-ciudadana-9ff85.firebaseapp.com",
  projectId: "carpeta-ciudadana-9ff85",
  storageBucket: "carpeta-ciudadana-9ff85.appspot.com",
  messagingSenderId: "136204855758",
  appId: "1:136204855758:web:1d3f64ea9a165679e0239f",
  measurementId: "G-B4K3JBMJRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);