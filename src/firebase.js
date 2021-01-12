import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFP-npsjbViWgSa7JmOILSXsqB9CxfkJk",
  authDomain: "facebook-messenger-clone-fa09d.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-fa09d-default-rtdb.firebaseio.com",
  projectId: "facebook-messenger-clone-fa09d",
  storageBucket: "facebook-messenger-clone-fa09d.appspot.com",
  messagingSenderId: "1068710643229",
  appId: "1:1068710643229:web:d3713d5946bc7a7cfda8f4",
  measurementId: "G-G9DDJR7D2B"
});

const db = firebaseApp.firestore();

export default db;