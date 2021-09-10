// import './App.css';
import React from 'react';

import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Blog from './components/Blog';
import FormGarage from './components/forms/FormGarage'
import Login from './components/Login';
import Register from './components/Register';

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
    <Route  path="/login" component={Login} />
    <Route  path="/register" component={ujkh} />
    </Switch>

    <Footer/>
</Router>
    </>
    
  );
}

export default App;
