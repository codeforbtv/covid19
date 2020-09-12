import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

import App from './components/App';
 
const config = {
    apiKey: "AIzaSyCbRIf0Ek1brQMBH0BlH8BBBTHSaEKh9ao",
    authDomain: "vt-covid-resources.firebaseapp.com",
    databaseURL: "https://vt-covid-resources.firebaseio.com",
    projectId: "vt-covid-resources",
    storageBucket: "vt-covid-resources.appspot.com",
    messagingSenderId: "857078712904",
    appId: "1:857078712904:web:4e4781e6be53991205267d",
    measurementId: "G-J9XKK8Q6MW",
};
 
firebase.initializeApp(config);
 
ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>,
  document.getElementById('root'),
);
