// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIYj7Cab0yER1vWXUkI7-MR1Mjriqswds",
  authDomain: "zemo-app.firebaseapp.com",
  projectId: "zemo-app",
  storageBucket: "zemo-app.appspot.com",
  messagingSenderId: "344909057701",
  appId: "1:344909057701:web:96e2ad9d6cfad615e6074c",
  measurementId: "G-29CFS4RXEV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
