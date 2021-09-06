// import './App.css';
import React from 'react';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";

import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';






function App() {
  return (
   
   <>
     <Navbar />
     <Body/>
     <Footer/>
   </>
    
  );
}

export default App;
