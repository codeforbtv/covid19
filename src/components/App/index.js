import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';

import Navigation from '../Navigation';
import DomesticViolence from '../DomesticViolence';
import ChildFamily from '../ChildFamily';
import MentalHealth from '../MentalHealth';
import CrisisHelpLines from '../CrisisHelpLines';

const App = () => (
  <Router>
    <div>
      <h1>Choose a Health Topic</h1>
      <nav>
        <ul>
          <li>
            <Link to="/domestic-violence">Domestic Violence</Link>
          </li>
          <li>
            <Link to="/mental-health">Mental Health</Link>
          </li>
          <li>
            <Link to="/crisis-help-lines">Crisis Help Lines</Link>
          </li>
          <li>
            <Link to="/child-fam">Child & Family Services</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/domestic-violence">
          <DomesticViolence />
        </Route>
        <Route path="/mental-health">
          <MentalHealth />
        </Route>
        <Route path="/crisis-help-lines">
          <CrisisHelpLines />
        </Route>
        <Route path="/child-fam">
          <ChildFamily />
        </Route>
      </Switch>
    </div>
    </Router>
);

export default App;