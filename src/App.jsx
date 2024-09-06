import { useState, useEffect } from 'react';
import './App.css';
import { app, analytics } from './firebaseConfig'; // Import Firebase configuration
import Navbar from "./Components/Navbar/Navbar"

function App() {
  useEffect(() => {
    // Firebase analytics initialization
    if (analytics) {
      console.log('Firebase Analytics Initialized');
    }
  }, []);

  return (
    <>
    <Navbar/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  );
}

export default App;
