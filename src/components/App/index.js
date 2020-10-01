import React, { useReducer, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';

import DomesticViolence from '../DomesticViolence';
import ChildFamily from '../ChildFamily';
import MentalHealth from '../MentalHealth';
import CrisisHelpLines from '../CrisisHelpLines';
import './App.css';

const App = () => (
  <>
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
    <Form/>
    </>
);

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      name: '',
      email: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    })
  }

  return(
  <div className='wrapper'>
  <h1>Sign Up for Our Email Newsletter!</h1>
  {submitting &&
  <div>You are submitting the following:
    <ul>
      {Object.entries(formData).map(([name, value]) => (
        <li key={name}><strong>{name}</strong>: {value.toString()}</li>
      ))}
    </ul>
  </div>
  }
  <form onSubmit={handleSubmit}>
    <fieldset disabled={submitting}>
      <label>
        <p>Name</p>
        <input name='name' onChange={handleChange} value={formData.name}/>
      </label>
    </fieldset>
    <fieldset disabled={submitting}>
      <label>
        <p>Email</p>
        <input type='email' name='email' onChange={handleChange} value={formData.email}/>
      </label>
    </fieldset>
    <button type='submit' disabled={submitting}>Submit</button>
  </form>
  </div>
  )
}

export default App;