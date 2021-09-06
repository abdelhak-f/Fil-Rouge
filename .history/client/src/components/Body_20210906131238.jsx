import React from 'react';
import Text from './Text';
import FirstFrontForm from './forms/FirstFrontForm';
import Switch from 'react-bootstrap/esm/Switch';

export default function componentName() {
  return (
    <>
    {/* import the Text */}
    <Text />
     {/* import the first form of client */}
     <FirstFrontForm />
     <Router>
       <Switch>
          <Route  />
       </Switch>
     </Router>
     
    </>
  );
}
