import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
// import "firebase/firestore";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHwztGzl76uIUJ1m6dFReEbYhie7wY-2I",
  authDomain: "chat-app-571c8.firebaseapp.com",
  projectId: "chat-app-571c8",
  storageBucket: "chat-app-571c8.appspot.com",
  messagingSenderId: "425393038023",
  appId: "1:425393038023:web:3ab1337a9bf5a2982a54e2",
  // databaseURL:
  //   "https://chat-app-571c8-default-rtdb.asia-southeast1.firebasedatabase.app/",
  measurementId: "G-TKGYQS2JMF",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
// const db = firebase.database;
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  //   auth.useEmulator("http://localhost:3000");
  //   db.useEmulator("localhost", "8080");
  // }
  // if (window.location.hostname === "10.56.66.48") {
  //   auth.useEmulator("http://localhost:3000");
  //   // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
