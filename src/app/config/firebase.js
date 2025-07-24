import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2sdM3RG3U2mPs3njLuYLG_jbcUMNUToM",
  authDomain: "landing-page-250218.firebaseapp.com",
  projectId: "landing-page-250218",
  storageBucket: "landing-page-250218.firebasestorage.app",
  messagingSenderId: "67171064573",
  appId: "1:67171064573:web:f71fb2cd0577e2fec43c94",
  measurementId: "G-PH1TY55DD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

