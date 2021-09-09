// import './App.css';
import React from 'react';

import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Blog from './components/Blog';
import FormGarage from './forms/FormGarage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






function App() {
  return (
   
   
    <>
<Router>

     <Navbar />
     
    

     
    <Switch>
    <Route  path="/" exact component={Body} />
    <Route  path="/Blog" component={Blog} />
    <Route  path="/FormGarage" component={FormGarage} />
    </Switch>

    <Footer/>
</Router>
    </>
    
  );
}

export default App;
