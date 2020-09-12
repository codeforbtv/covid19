import app from 'firebase/app';
import 'firebase/firestore';

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

class Firebase {
    constructor() {
       app.initializeApp(config); 
       this.db = app.firestore();
   }
   docs = () => this.db.ref('health-wellness-accessibility');
}

export default Firebase;
