// import './App.css';
import React from 'react';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";

import Blog from './components/Blog'
import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';






function App() {
  return (
   
   
   <Router>
     <Navbar />
     <Body/>
     <Footer/>


     <Switch>
       <Route path="" component={Blog} />
     </Switch>
   </Router>
    
  );
}

export default App;
