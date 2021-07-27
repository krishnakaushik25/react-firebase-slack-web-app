import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
   apiKey: "AIzaSyB2rCnzkUoQUqsoRwvr2rDDN_fTxrUCQ4o",
   authDomain: "slack-react-web-app.firebaseapp.com",
   projectId: "slack-react-web-app",
   storageBucket: "slack-react-web-app.appspot.com",
   messagingSenderId: "809478569297",
   appId: "1:809478569297:web:caa19219781f3d2e2d2770",
   measurementId: "G-K5YG6Q9635"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase;
