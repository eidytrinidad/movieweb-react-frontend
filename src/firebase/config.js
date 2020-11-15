import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBNYMhTHzUu_aoNywVm6l_BvnaCXxHlnJQ",
  authDomain: "movieweb-f4756.firebaseapp.com",
  databaseURL: "https://movieweb-f4756.firebaseio.com",
  projectId: "movieweb-f4756",
  storageBucket: "movieweb-f4756.appspot.com",
  messagingSenderId: "990976461418",
  appId: "1:990976461418:web:1058b2ac1a5fa112dfd813",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestorage = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestorage, projectStorage, timestamp };
