import React from 'react';
 
import  { FirebaseContext } from '../Firebase';

const HealthData = () => (

  <FirebaseContext.Consumer>
    {firebase => {
      return <div firebase={firebase} >I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default HealthData;