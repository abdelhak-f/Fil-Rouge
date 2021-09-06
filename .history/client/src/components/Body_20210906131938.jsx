import React from 'react';
import Text from './Text';
import FirstFrontForm from './forms/FirstFrontForm';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import Blog from './Blog';


export default function componentName() {
  return (
    <>
    
     <Router>
       {/* import the Text */}
    <Text />
     {/* import the first form of client */}
     <FirstFrontForm />
       <Switch>
          <Route path="/blog" exact component={Blog} />
       </Switch>
     </Router>
     
    </>
  );
}
