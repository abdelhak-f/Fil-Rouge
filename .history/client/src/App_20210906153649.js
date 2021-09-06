// import './App.css';
import React from 'react';

import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Blog from './components/Blog';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';






function App() {
  return (
   
   
    <>
<Router>

     <Navbar />
     
     <Footer/>

     
    <Switch>
    <Route  path="/" exact component={Body} />
       <Route  path="/Blog" component={Blog} />
    </Switch>
</Router>
    </>
    
  );
}

export default App;
