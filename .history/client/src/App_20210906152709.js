// import './App.css';
import React from 'react';

import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';

// using CommonJS modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






function App() {
  return (
   
   
    <>
    <Router>
     <Navbar />
     <Body/>
     <Footer/>

     
    <Switch>
       <Route path="/Blog" component={Blog} />
    </Switch>
</Router>
    </>
    
  );
}

export default App;
