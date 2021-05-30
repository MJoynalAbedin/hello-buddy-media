import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAANfFb_1boVVgxZXOB8vXIAr_oUM6i9Xk",
    authDomain: "hello-buddy-media.firebaseapp.com",
    projectId: "hello-buddy-media",
    storageBucket: "hello-buddy-media.appspot.com",
    messagingSenderId: "585484110222",
    appId: "1:585484110222:web:7a7f6ef43d5099a15b7cdf",
    measurementId: "G-B54N57903F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


export {db, auth};


//   databaseURL: "https://solar-studio-d83bc.firebaseio.com",