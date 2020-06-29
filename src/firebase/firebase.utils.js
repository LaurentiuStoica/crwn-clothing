import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyA04HllEqRfvnBDsMGBahcU6pkZMDZ6rlE",
  authDomain: "crwn-db-cd474.firebaseapp.com",
  databaseURL: "https://crwn-db-cd474.firebaseio.com",
  projectId: "crwn-db-cd474",
  storageBucket: "crwn-db-cd474.appspot.com",
  messagingSenderId: "672045826205",
  appId: "1:672045826205:web:f5e63c65c723f2ad625474",
  measurementId: "G-199JYLX61J",
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
