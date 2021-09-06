import React from 'react';
import Text from './Text';
import FirstFrontForm from './forms/FirstFrontForm';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";


export default function componentName() {
  return (
    <>
    
     <Router>
       {/* import the Text */}
    <Text />
     {/* import the first form of client */}
     <FirstFrontForm />
       <Switch>
          <Route  />
       </Switch>
     </Router>
     
    </>
  );
}
