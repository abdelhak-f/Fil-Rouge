// import './App.css';
import React from 'react';

import Navbar from './components/Nnavbar';
import Body from './components/Body';
import Footer from './components/Footer';






function App() {
  return (
   
   
    <>
     <Navbar />
     <Body/>
     <Footer/>

     <Router>
    <Switch>
       <Route path="/Blog" component={Blog} />
    </Switch>
</Router>
    </>
    
  );
}

export default App;
