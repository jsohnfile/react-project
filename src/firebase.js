import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY84WkhQysItiPuzfHAz2PjoML07deHKQ",
    authDomain: "twitter-clone-d7a9a.firebaseapp.com",
    databaseURL: "https://twitter-clone-d7a9a.firebaseio.com",
    projectId: "twitter-clone-d7a9a",
    storageBucket: "twitter-clone-d7a9a.appspot.com",
    messagingSenderId: "43249370307",
    appId: "1:43249370307:web:b2ccf94c6f985f53a20e76",
    measurementId: "G-2DTR0JVH3J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;