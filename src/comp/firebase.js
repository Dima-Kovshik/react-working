import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth"
import { createContext } from "react";
import { test } from "./signIn";

const firebaseConfig = {
  apiKey: "AIzaSyBNZ7ffwmAf4Bjw1AwgJ8lLrdpWAhOX7G0",
  authDomain: "react-working.firebaseapp.com",
  projectId: "react-working",
  storageBucket: "react-working.appspot.com",
  messagingSenderId: "1024768483114",
  appId: "1:1024768483114:web:f25eea0801dc6293850853",
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);

export const ContextGlobal = createContext(null);
export const auth1 = firebase.auth();

export default firebase;
