import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import Navigation from '../Navigation';
import Health from '../Health';
 
import * as ROUTES from '../../constants/routes';
 
const App = () => (
  <Router>
    <div>
      <Navigation />
 
      <hr />
 
      <Route path={ROUTES.HEALTH} component={Health} />
    </div>
  </Router>
);
 
export default App;