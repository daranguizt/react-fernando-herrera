import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoUQCF8c2GLKzP9vm8L9jTVuL4U6r-dUA",
  authDomain: "react-test-bcf8d.firebaseapp.com",
  projectId: "react-test-bcf8d",
  storageBucket: "react-test-bcf8d.appspot.com",
  messagingSenderId: "655328756302",
  appId: "1:655328756302:web:6b535323a804301ca4391f",
  measurementId: "G-7YNXEJHF7X",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}