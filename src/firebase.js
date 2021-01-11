// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDgHbZ3vENSHBlgDsj9vsbJuHl_YmeQ33M',
  authDomain: 'clone-b06de.firebaseapp.com',
  projectId: 'clone-b06de',
  storageBucket: 'clone-b06de.appspot.com',
  messagingSenderId: '261055064381',
  appId: '1:261055064381:web:22a4c856477b5d3a027d54',
  measurementId: 'G-2MMQNCD0WR'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
