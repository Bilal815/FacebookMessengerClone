import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBmK-ZAHxXhaavfTL0WSv7mVwRvdn30gg",
  authDomain: "facebook-messenger-clone.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone.firebasio.com",
  projectId: "facebook-messenger-clone",
  storageBucket: "facebook-messenger-clone.appspot.com",
  messagingSenderId: "226212015774",
  appId: "1:226212015774",
  measurementId: "G-FB4NJEW2FT"
});

const db = firebaseApp.firestore();

export default db;