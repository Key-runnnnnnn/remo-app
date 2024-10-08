import { useState, useEffect } from 'react';
import './App.css';
import { app, analytics } from './firebaseConfig'; // Import Firebase configuration
import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import Faq from "./Components/FAQ/Faq"
import Zymo from "./Components/Zymo/Zymo"
import Youtube from "./Components/Youtube/Youtube"
import Refer from "./Components/Refer/Refer"
import Benefits from "./Components/Benefits/Benefits"
import Cars from "./Components/Cars/Cars"
import Featured from "./Components/Featured/Featured"
import Reviews from "./Components/Reviews/Reviews"
import Footer from "./Components/Footer/Footer"
import CarRentalComponent from './Components/Footer/CarRentalComponent';

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
    <Benefits/>
    <Refer/>
    <Cars/>
    <Featured/>
    <Reviews/>
    <Youtube/>
    <Faq/>
    <CarRentalComponent/>
    <Footer/>
    </>
  );
}

export default App;
