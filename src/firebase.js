import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBv0_kjbjlMxdFlcHRrlFsf7HNZOweBDKQ",
    authDomain: "feed-da4f6.firebaseapp.com",
    projectId: "feed-da4f6",
    storageBucket: "feed-da4f6.appspot.com",
    messagingSenderId: "585658484456",
    appId: "1:585658484456:web:9e1a3020489f33ebd92b5d",
    measurementId: "G-4NX9LBKZQJ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;