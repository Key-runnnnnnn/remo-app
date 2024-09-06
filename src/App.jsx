import { useState, useEffect } from 'react';
import './App.css';
import { app, analytics } from './firebaseConfig'; // Import Firebase configuration
import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import Faq from "./Components/FAQ/Faq"
import Zymo from "./Components/Zymo/Zymo"
import Youtube from "./Components/Youtube/Youtube"

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
    <Banner/>
    <Zymo/>
    <Youtube/>
    <Faq/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </>
  );
}

export default App;
